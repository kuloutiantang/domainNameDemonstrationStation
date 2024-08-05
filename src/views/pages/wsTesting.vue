<script setup>
import { io } from 'socket.io-client'
const socket = io('http://nestadmin.kuloutiantang.top:81/events')

socket.on('connect', (res) => {
  console.log(res)
  console.log('socket.io连接成功')
})
</script>

<template>
  <div>wsTesting</div>
</template>
