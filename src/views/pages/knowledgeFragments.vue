<script setup>
import { ref, onMounted, computed, toRaw, h } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

// 组件
import GlassCard from '@/components/GlassCard.vue'
import EdenWaterfallFlow from '@/components/EdenWaterfallFlow/EdenWaterfallFlow.vue'

// 状态管理
import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { useColorStore } from '@/stores/color'
const color = useColorStore()

// UI
import { marked } from 'marked'
import {
  NModal,
  NInputGroup,
  NInput,
  NButton,
  NSpace,
  NTag,
  NPageHeader,
  NAutoComplete,
  NForm,
  NFormItem,
  NDynamicTags,
  NDivider,
  useDialog,
  useMessage
} from 'naive-ui'
const dialog = useDialog()
const message = useMessage()

// 文章列表
import dayjs from 'dayjs'
const dataCompleted = ref(false) // 数据是否加载完成
const articleFormRef = ref(null) // 文章表单
const articleList = ref([]) // 知识碎片/文章

/**
 * 获取数据
 * @param condition 是否强制刷新
 */
const getData = (condition = false) => {
  if (condition || dataCompleted.value) {
    if (condition) {
      searchText.value = ''
    }
    showSearch.value = false
    showEditor.value = false
    editModal.value = false
    // 获取知识碎片
    search()
  } else {
    message.info('数据加载中')
  }
}
/**
 * 搜索获取知识碎片
 */
const search = () => {
  dataCompleted.value = false
  let text = ''
  if (searchText.value.length > 0) {
    text = '?text=' + searchText.value
  }
  axios
    .get('http://phpapi.kuloutiantang.top/www/index/article' + text)
    .then((res) => {
      if (res.data.code > 0 && res.data.code < 500) {
        let list = []
        for (let k = 0; k < res.data.data.length; k++) {
          const item = res.data.data[k]
          let newItem = { ...item }
          newItem.timeStart = dayjs(item.createtime * 1000).format('YYYY-MM-DD')
          newItem.timeEnd = dayjs(item.updatetime * 1000).format('YYYY-MM-DD')
          newItem.tagsArr = item.tags.split(',')
          newItem.markDown = marked.parse(item.content)
          list.push(newItem)
        }
        articleList.value = list
        showSearch.value = false
        dataCompleted.value = true
      }
    })
    .catch(() => {
      dataCompleted.value = true
    })
}

// 搜索
const showSearch = ref(false) // 搜索框开关
const searchText = ref('') // 搜索框文本

// 登录
const showLoginWindow = ref(false) // 登录窗口开关
const loginFormRef = ref(null) // 登录表单
const loginFormData = ref({
  email: '',
  password: ''
}) // 登录表单数据
const loginFormRules = {
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: ['blur', 'change', 'input']
    },
    {
      trigger: ['blur', 'change', 'input'],
      level: 'error',
      validator(_rule, value) {
        if (value.length > 30) {
          return new Error('过长')
        }
        return true
      }
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['blur', 'change', 'input']
    },
    {
      trigger: ['blur', 'change', 'input'],
      level: 'warning',
      validator(_rule, value) {
        if (value.length < 6) {
          return new Error('码不是很密')
        }
        return true
      }
    },
    {
      trigger: ['blur', 'change', 'input'],
      level: 'error',
      validator(_rule, value) {
        if (value.length > 16) {
          return new Error('过长')
        }
        return true
      }
    }
  ]
} // 登录表单验证规则

/**
 * 邮箱后缀
 */
const emailOptions = computed(() => {
  return ['@qq.com', '@gmail.com', '@163.com'].map((suffix) => {
    const prefix = loginFormData.value['email'].split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

/**
 * 显示登录窗口
 */
const toShowLoginWindow = () => {
  showLoginWindow.value = true
  loginFormData.value = {
    email: '',
    password: ''
  }
}
/**
 * 登录按钮
 */
const tryLogin = (e) => {
  e.preventDefault()
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      showLoginWindow.value = false
      let data = toRaw(loginFormData.value)
      // 登录
      userLogin(data)
    }
  })
}
/**
 * 用户登录
 * @param data 登录数据
 */
const userLogin = (data) => {
  user.login(
    data,
    () => {
      message.create('欢迎 ' + data.email, {
        icon: () =>
          h('div', {
            style: 'color: #fc0',
            class: 'i-solar-confetti-minimalistic-bold-duotone'
          }),
        duration: 1400
      })
    },
    (err) => {
      console.log(err)
      message.warning('你怎么想的？', {
        icon: () =>
          h('div', {
            class: 'i-solar-question-square-bold'
          }),
        duration: 3500
      })
    }
  )
}

// 添加/编辑
const editModal = ref(false) // 编辑模式
const editId = ref(0) // 编辑模式下文章id
const showEditor = ref(false) // 编辑框开关
const articleFormData = ref({
  tags: [],
  content: ''
})
/**
 * 文章表单验证规则
 */
const articleFormRules = {
  tags: {
    trigger: ['change'],
    validator(rule, value) {
      if (value.length >= 7) return new Error('不得超过七个标签')
      return true
    }
  }
} // 文章表单验证规则

/**
 * 搜索标签
 * @param tags 标签
 */
const searchTag = (tags) => {
  let text = ':' + tags
  searchText.value = text
  getData()
}
/**
 * 显示编辑窗口
 */
const toShowEditor = (item) => {
  if (item == 0) {
    editId.value = 0
    articleFormData.value = {
      tags: [],
      content: ''
    }
    showEditor.value = true
  } else {
    editId.value = item.id
    let tagsArr = JSON.parse(JSON.stringify(item.tagsArr))
    let data = {
      tags: tagsArr,
      content: item.content
    }
    articleFormData.value = data
    showEditor.value = true
  }
}
/**
 * 文章保存按钮
 */
const articleSave = () => {
  articleFormRef.value?.validate((errors) => {
    if (!errors) {
      if (editModal.value) {
        let data = {
          tags: JSON.parse(JSON.stringify(articleFormData.value.tags)),
          content: articleFormData.value.content
        }
        data.tags = data.tags.join(',')
        axios
          .put('http://phpapi.kuloutiantang.top/www/index/article?id=' + editId.value, data)
          .then(() => {
            getData()
          })
      } else {
        let data = toRaw(articleFormData.value)
        data.tags = data.tags.join(',')
        axios.post('http://phpapi.kuloutiantang.top/www/index/article', data).then(() => {
          getData()
        })
      }
    }
  })
}
/**
 * 删除文章
 * @param item 文章
 */
const toDelete = (item) => {
  dialog.error({
    title: '警告',
    content: '删除操作不可撤回',
    positiveText: '确认删除',
    negativeText: '返回',
    onPositiveClick: () => {
      axios.delete('http://phpapi.kuloutiantang.top/www/index/article?id=' + item.id).then(() => {
        getData()
      })
    }
  })
}

// 留言
const showMessageBoard = ref(false)
const messageBoardText = ref('') // 留言板内容
const showBoard = ref(false)

/**
 * 保存留言
 */
const leavingMessage = () => {
  showMessageBoard.value = false
  if (messageBoardText.value.length >= 10) {
    let msgReactive = message.create('提交中...', {
      type: 'loading',
      duration: 10 * 1e3
    })
    axios
      .post('http://phpapi.kuloutiantang.top/www/index/message', {
        content: messageBoardText.value
      })
      .then(() => {
        if (msgReactive) {
          msgReactive.content = '留言提交成功'
          msgReactive.type = 'success'
          setTimeout(() => {
            msgReactive.destroy()
            msgReactive = null
          }, 1e3)
        }
        messageBoardText.value = ''
      })
      .catch(() => {
        if (msgReactive) {
          msgReactive.content = '留言提交失败'
          msgReactive.type = 'error'
          setTimeout(() => {
            msgReactive.destroy()
            msgReactive = null
          }, 1e3)
        }
      })
  }
}

// 生命周期
onMounted(() => {
  !color.beReady && color.init()
  // 静默登录
  user.localUser()
  // 加载数据
  getData(true)
})

// 其他函数
/**
 * 随机HEX色值
 */
const randomHEX = () => {
  let r = Math.floor(Math.random() * 0xcf + 0x1f).toString(16)
  let g = Math.floor(Math.random() * 0xcf + 0x1f).toString(16)
  let b = Math.floor(Math.random() * 0xcf + 0x1f).toString(16)
  return '#' + r + g + b
}
</script>
<template>
  <!-- 正文 -->
  <div class="w-100vw h-100vh flex flex-col justify-start items-center">
    <div
      class="box-border bg-theme w-full py-14px flex flex-col justify-center items-center border-1px border-b-solid z-2"
    >
      <NPageHeader class="w-1200px <xl:(w-full px-1rem)">
        <template #title>
          <div class="flex flex-row justify-start items-center">
            <div
              @click="router.go(-1)"
              class="cursor-pointer size-35px transition-777 i-solar-home-smile-bold-duotone"
              :style="'color: ' + color.themeColor"
            ></div>
            <div class="w-21px"></div>
            <div class="fw-900 text-28px lh-42px cursor-pointer select-none" @click="getData(true)">
              知识碎片
            </div>
          </div>
        </template>
        <template #extra>
          <NSpace>
            <div class="h-full flex justify-center items-center">
              <span>{{ searchText }}</span>
            </div>
            <NButton
              @click.exact="showSearch = true"
              strong
              :type="user.isLogin ? 'info' : 'tertiary'"
              >搜索</NButton
            >
            <NButton v-if="user.isLogin" @click="editModal = !editModal" strong type="warning"
              >编辑</NButton
            >
            <NButton v-if="user.isLogin" @click="toShowEditor(0)" strong type="success"
              >添加</NButton
            >
            <NButton v-if="!user.isLogin" @click="toShowLoginWindow" strong type="tertiary"
              >登录</NButton
            >
            <NButton v-if="!user.isLogin" @click="showMessageBoard = true" strong type="tertiary"
              >留言</NButton
            >
            <NButton v-if="user.isLogin" @click="user.logout()" strong type="error">退出</NButton>
            <div v-if="user.isLogin" class="h-full flex justify-center items-center select-none">
              <span>{{ user.user.email }}</span>
            </div>
          </NSpace>
        </template>
      </NPageHeader>
    </div>
    <div class="hidden <xl:(block w-full h-full flex justify-center items-center)">
      <div class="i-solar-monitor-smartphone-bold-duotone size-50px"></div>
    </div>
    <div
      v-if="dataCompleted"
      class="box-border w-1200px flex-auto p-2rem <xl:(hidden) >2xl:(w-1440px)"
    >
      <EdenWaterfallFlow class="w-full h-full" :gap="21">
        <GlassCard v-for="(item_a, index_a) in articleList" :key="index_a" class="p-20px">
          <NSpace class="select-none">
            <div
              v-for="(item_a_ta, index_a_ta) in item_a.tagsArr"
              :key="index_a_ta"
              @click="searchTag(item_a_ta)"
            >
              <NTag round class="cursor-pointer" :color="{ color: randomHEX() + '22' }">
                {{ item_a_ta }}
              </NTag>
            </div>
          </NSpace>
          <div class="h-7px"></div>
          <div class="markdown-body" v-html="item_a.markDown"></div>
          <div class="h-14px"></div>
          <div
            class="w-full select-none flex flex-row flex-wrap justify-between text-center text-14px lh-35px"
          >
            <div class="break-keep">
              <div
                class="inline-block vertical-top size-21px my-7px i-solar-document-add-line-duotone"
              ></div>
              {{ item_a.timeEnd }}
            </div>
            <div class="break-keep">
              <div
                class="inline-block vertical-top size-21px my-7px i-solar-document-medicine-line-duotone"
              ></div>
              {{ item_a.timeStart }}
            </div>
          </div>
          <div v-if="editModal" class="w-full">
            <div class="h-7px"></div>
            <NDivider />
            <NSpace>
              <NButton @click="toShowEditor(item_a)" type="success">编辑</NButton>
              <NButton @click="toDelete(item_a)" type="error">删除</NButton>
            </NSpace>
            <div class="h-7px"></div>
          </div>
        </GlassCard>
      </EdenWaterfallFlow>
    </div>
  </div>
  <!-- 搜索窗口 -->
  <NModal v-model:show="showSearch">
    <div class="box-border bg-theme p-2rem rd-7px border-solid border-1px mx-5rem mt-14rem w-full">
      <NInputGroup>
        <n-input
          @keyup.enter="getData()"
          v-model:value="searchText"
          type="text"
          size="large"
          placeholder="我的建议是：不如Ctrl+F"
          clearable
        />
        <NButton @click="getData()" type="primary" size="large" secondary>搜索</NButton>
      </NInputGroup>
    </div>
  </NModal>
  <!-- 登录窗口 -->
  <NModal v-model:show="showLoginWindow">
    <div class="bg-theme p-3rem rd-7px border-solid border-1px max-w-1200px">
      <NForm
        @keyup.enter="tryLogin"
        ref="loginFormRef"
        :model="loginFormData"
        :rules="loginFormRules"
        size="large"
      >
        <NFormItem label="登录邮箱" path="email">
          <NAutoComplete
            tabindex="2"
            v-model:value="loginFormData.email"
            :options="emailOptions"
            placeholder="邮箱"
          />
        </NFormItem>
        <NFormItem label="密码" path="password">
          <NInput v-model:value="loginFormData.password" type="password" placeholder="密码" />
        </NFormItem>
        <NFormItem label=" ">
          <NButton @click="tryLogin" class="w-full" attr-type="button">登录</NButton>
        </NFormItem>
      </NForm>
    </div>
  </NModal>
  <!-- 编辑窗口 -->
  <NModal v-model:show="showEditor">
    <div class="bg-theme p-3rem rd-7px border-solid border-1px max-w-1200px">
      <NForm
        ref="articleFormRef"
        :model="articleFormData"
        :rules="articleFormRules"
        size="large"
        class="min-w-600px"
      >
        <NFormItem label="标签" path="tags">
          <NDynamicTags v-model:value="articleFormData.tags" size="large" />
        </NFormItem>
        <NFormItem label="内容" path="content">
          <NInput
            v-model:value="articleFormData.content"
            placeholder="内容"
            type="textarea"
            size="large"
            :autosize="{
              minRows: 3,
              maxRows: 14
            }"
          />
        </NFormItem>
        <NFormItem label=" ">
          <NButton @click="articleSave" class="w-full" attr-type="button" type="success"
            >保存</NButton
          >
        </NFormItem>
      </NForm>
    </div>
  </NModal>
  <!-- 留言窗口 -->
  <NModal v-model:show="showMessageBoard">
    <div class="box-border bg-theme p-2rem rd-7px border-solid border-1px mx-7rem mt-7rem w-full">
      <n-input
        @keyup.shift.enter="leavingMessage()"
        v-model:value="messageBoardText"
        placeholder="至少10个字
直接'Enter'换行，'Shift+Enter'提交
可以是意见或建议
或者也留一个知识碎片(Markdown格式)，我看见了说不定就摆上去"
        type="textarea"
        size="small"
        :status="
          messageBoardText.length == 0 ? 'none' : messageBoardText.length >= 10 ? 'none' : 'error'
        "
        :autosize="{
          minRows: 7,
          maxRows: 21
        }"
        clearable
        show-count
      />
      <div class="h-14px"></div>
      <NButton @click.once="leavingMessage()" class="w-full" type="primary" size="large" secondary
        >提交留言(Shift+Enter)</NButton
      >
    </div>
  </NModal>
  <!-- 留言板 -->
  <NModal v-model:show="showBoard">
    <div class="box-border bg-theme p-2rem rd-7px border-solid border-1px m-7rem w-full h-max-50%">
      123
    </div>
  </NModal>
</template>
<style scoped>
div > span > a > p {
  cursor: default;
  user-select: none;
}
</style>
