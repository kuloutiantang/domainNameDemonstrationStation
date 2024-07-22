<script setup>
import GlassCard from '@/components/GlassCard.vue'
import EdenWaterfallFlow from '@/components/EdenWaterfallFlow/EdenWaterfallFlow.vue'
import { ref, onMounted, computed, toRaw } from 'vue'
import { marked } from 'marked'
import {
  NMessageProvider,
  NModal,
  NInputGroup,
  NInput,
  NButton,
  NSpace,
  NTag,
  NPageHeader,
  NAutoComplete,
  NForm,
  NFormItem
} from 'naive-ui'
import axios from 'axios'

const loginFormRef = ref(null) // 登录表单

const searchText = ref('') // 搜索框文本
const dataCompleted = ref(false) // 数据是否加载完成
const articleList = ref([]) // 知识碎片
const showSearch = ref(false) // 搜索框开关
const isLogin = ref('') // 是否登录
const showLoginWindow = ref(false) // 登录窗口开关
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

const emailOptions = computed(() => {
  return ['@qq.com', '@gmail.com', '@163.com'].map((suffix) => {
    const prefix = loginFormData.value['email'].split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

onMounted(() => {
  // 静默登录
  autoLogin()
  // 获取知识碎片
  getArticle()
})

/**
 * 获取知识碎片
 */
const getArticle = () => {
  axios.get('http://phpapi.kuloutiantang.top/www/index/article').then((res) => {
    if (res.data.code > 0 && res.data.code < 500) {
      for (let k = 0; k < res.data.data.length; k++) {
        const item = res.data.data[k]
        let newItem = { ...item }
        newItem.time = formatTimestampToYmdHm(item.updatetime)
        newItem.tagsArr = item.tags.split(',')
        newItem.markDown = marked.parse(item.content)
        articleList.value.push(newItem)
      }
      dataCompleted.value = true
    }
  })
}
/**
 * 格式化时间戳
 * @param timestamp 时间戳
 */
const formatTimestampToYmdHm = (timestamp) => {
  // 将秒级时间戳转换为毫秒级
  var msTimestamp = timestamp * 1000
  // 创建新的Date对象
  var date = new Date(msTimestamp)
  // 获取各个部分
  var year = date.getFullYear()
  var month = ('0' + (date.getMonth() + 1)).slice(-2) // 月份从0开始，所以加1
  var day = ('0' + date.getDate()).slice(-2)
  var hours = ('0' + date.getHours()).slice(-2)
  var minutes = ('0' + date.getMinutes()).slice(-2)
  // 返回格式化的字符串
  return year + '年' + month + '月' + day + '日 ' + hours + '点' + minutes + '分'
}
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
const autoLogin = () => {
  let cookieUser = getCookie('user')
  if (cookieUser) {
    let cookieUserArr = JSON.parse(cookieUser)
    return login(cookieUserArr)
  } else {
    return false
  }
}
/**
 * 获取cookie
 * @param name cookie名称
 */
const getCookie = (name) => {
  var strcookie = document.cookie //获取cookie字符串
  var arrcookie = strcookie.split('; ') //分割
  //遍历匹配
  for (var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split('=')
    if (arr[0] == name) {
      return arr[1]
    }
  }
  return ''
}
/**
 * 登录
 */
const tryLogin = (e) => {
  e.preventDefault()
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      showLoginWindow.value = false
      let data = toRaw(loginFormData.value)
      // 登录
      login(data)
    }
  })
}
/**
 * 登录
 * @param data 登录数据
 */
const login = (data) => {
  axios
    .post('http://phpapi.kuloutiantang.top/www/index/login', data)
    .then((res) => {
      if (res.data.code == 1) {
        let expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 1))
        let userJson = JSON.stringify(data)
        document.cookie = 'user=' + userJson + '; expires=' + expirationDate
        isLogin.value = data.email
        return true
      } else {
        logout()
        return false
      }
    })
    .catch(() => {
      logout()
      return false
    })
}
/**
 * 搜索
 */
const search = () => {
  showSearch.value = false
}
/**
 * 搜索标签
 * @param tags 标签
 */
const searchTag = (tags) => {
  console.log(tags)
}
/**
 * 退出登录
 */
const logout = () => {
  let expiresDelete = new Date()
  document.cookie = 'user=; expires=' + expiresDelete
  isLogin.value = ''
}
</script>
<template>
  <NMessageProvider></NMessageProvider>
  <div class="w-100vw h-100vh flex flex-col justify-start items-center">
    <div
      class="box-border bg-theme w-full py-14px flex flex-col justify-center items-center position-sticky top-0 border-1px border-b-solid z-2"
    >
      <NPageHeader class="w-1200px">
        <template #title>
          <div class="fw-900 text-28px cursor-default">知识碎片</div>
        </template>
        <template #extra>
          <NSpace>
            <div class="h-full flex justify-center items-center">
              <span>{{ searchText }}</span>
            </div>
            <NButton @click="showSearch = true" strong :type="isLogin ? 'info' : 'tertiary'"
              >搜索</NButton
            >
            <NButton v-if="isLogin != ''" strong type="warning">编辑</NButton>
            <NButton v-if="isLogin != ''" strong type="success">添加</NButton>
            <NButton v-if="isLogin == ''" @click="toShowLoginWindow" strong type="tertiary"
              >登录</NButton
            >
            <NButton v-if="isLogin != ''" @click="logout" strong type="error">退出</NButton>
            <div v-if="isLogin != ''" class="h-full flex justify-center items-center select-none">
              <span>{{ isLogin }}</span>
            </div>
          </NSpace>
        </template>
      </NPageHeader>
    </div>
    <div v-if="dataCompleted" class="box-border w-1200px flex-auto p-2rem">
      <EdenWaterfallFlow class="w-full h-full" :gap="49">
        <GlassCard v-for="(item_a, index_a) in articleList" :key="index_a" class="p-20px">
          <NSpace class="select-none">
            <div
              v-for="(item_a_ta, index_a_ta) in item_a.tagsArr"
              :key="index_a_ta"
              @click="searchTag(item_a_ta)"
            >
              <NTag round class="cursor-pointer" :color="{ color: '#ff0000' + '22' }">
                {{ item_a_ta }}
              </NTag>
            </div>
          </NSpace>
          <div class="h-7px"></div>
          <div class="markdown-body" v-html="item_a.markDown"></div>
          <div class="h-14px"></div>
          <div class="text-14px select-none">{{ item_a.time }}</div>
        </GlassCard>
      </EdenWaterfallFlow>
    </div>
  </div>
  <NModal v-model:show="showSearch">
    <div class="bg-theme p-2rem rd-7px border-solid border-1px w-62% max-w-1200px">
      <NInputGroup>
        <n-input
          @keyup.enter="search"
          v-model:value="searchText"
          type="text"
          size="large"
          placeholder="以+拼接内容"
          clearable
        />
        <NButton @click="search" type="primary" size="large" secondary>搜索</NButton>
      </NInputGroup>
    </div>
  </NModal>
  <NModal v-model:show="showLoginWindow">
    <div class="bg-theme p-3rem rd-7px border-solid border-1px max-w-1200px">
      <NForm
        @keyup.enter="login"
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
</template>
<style scoped>
div > span > a > p {
  cursor: default;
  user-select: none;
}
</style>
