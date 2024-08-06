<script setup>
import { ref, onMounted } from 'vue'

const ws = ref(null)
const text = ref('')

onMounted(() => {
  console.log('当前服务器会把接收到的数据原样返回三次')
})

const connect = () => {
  if (ws.value) {
    ws.value.close()
    ws.value = null
  }
  // 原生websocket
  ws.value = new WebSocket('ws://nodeapi.kuloutiantang.top/')
  // 监听连接
  ws.value.onopen = function (evt) {
    console.log(evt)
    console.log('【已连接……】')
  }
  // 监听消息
  ws.value.onmessage = function (evt) {
    console.log('【收到消息：', showJsonArr(evt.data), '】')
  }
  // 监听关闭
  ws.value.onclose = function (evt) {
    console.log(evt)
    console.log('【连接断开。】')
  }
}

const send = () => {
  if (ws.value) {
    wsSend(text.value, 'events')
    text.value = ''
  } else {
    console.log('连接已关闭')
  }
}

const disconnect = () => {
  if (ws.value) {
    ws.value.close()
    ws.value = null
  }
}

/**
 * 发送消息
 * @param data 数据
 * @param event 触发事件
 */
const wsSend = (data, event = 'events') => {
  let res = {
    event: event,
    data: data
  }
  ws.value.send(JSON.stringify(res))
}

const showJsonArr = (str) => {
  try {
    return JSON.parse(str)
  } catch (error) {
    return str
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center p-2rem">
    <div class="fw-900 text-35px">WS示例</div>
    <div class="h-1rem"></div>
    <div>在控制台查看效果</div>
    <div class="h-2rem"></div>
    <n-button @click="connect()" class="w-full" strong type="success">连接服务器</n-button>
    <div class="h-1rem"></div>
    <n-input-group>
      <n-input v-model:value="text" placeholder="消息内容" />
      <n-button @click="send()" strong type="info">发送消息</n-button>
    </n-input-group>
    <div class="h-1rem"></div>
    <n-button @click="disconnect()" class="w-full" strong type="error">断开连接</n-button>
    <div class="h-1rem"></div>
  </div>
</template>
