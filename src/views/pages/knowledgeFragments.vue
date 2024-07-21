<script setup>
import GlassCard from '@/components/GlassCard.vue'
import EdenWaterfallFlow from '@/components/EdenWaterfallFlow/EdenWaterfallFlow.vue'
import { ref, onMounted, computed, toRaw } from 'vue'

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
  NFormItem
} from 'naive-ui'
import axios from 'axios'

const text = ref('')
const html = ref('')
const dataCompleted = ref(false)
const articleList = ref([])
const showSearch = ref(false)
const showLoginWindow = ref(false)
const loginFormData = ref({
  email: '',
  password: ''
})
const loginFormRules = {
  email: {
    required: true,
    message: '请输入邮箱',
    trigger: ['blur', 'change', 'input']
  },
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
          return new Error('请输入密码')
        }
        return true
      }
    }
  ]
}

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
  // 获取知识碎片
  getArticle()
  text.value = '`let a = 1234567890`'
  html.value = marked.parse(text.value)
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
 * 登录
 */
const login = () => {
  showLoginWindow.value = false
  let data = toRaw(loginFormData.value)
  console.log(data)
}
/**
 * 搜索标签
 * @param tags 标签
 */
const searchTag = (tags) => {
  console.log(123)
  console.log(tags)
}
</script>
<template>
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
            <NButton @click="showLoginWindow = true" strong tertiary type="tertiary">登录</NButton>
            <NButton @click="showSearch = true" strong tertiary type="tertiary">搜索</NButton>
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
        <n-input type="text" size="large" placeholder="以+拼接内容" clearable />
        <NButton @click="showSearch = false" type="primary" size="large" secondary>搜索</NButton>
      </NInputGroup>
    </div>
  </NModal>
  <NModal v-model:show="showLoginWindow">
    <div class="bg-theme p-3rem rd-7px border-solid border-1px max-w-1200px">
      <NForm :model="loginFormData" :rules="loginFormRules" size="large">
        <NFormItem label="登录邮箱" path="email">
          <NAutoComplete
            v-model:value="loginFormData.email"
            :options="emailOptions"
            placeholder="邮箱"
          />
        </NFormItem>
        <NFormItem label="密码" path="password">
          <NInput v-model:value="loginFormData.password" type="password" placeholder="密码" />
        </NFormItem>
        <NFormItem label=" ">
          <NButton @click="login" class="w-full" attr-type="button">登录</NButton>
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
