<script setup>
import { computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
// css
import { useOsTheme, darkTheme } from 'naive-ui'
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
// 日志
import axios from 'axios'

onMounted(() => {
  axios.get('http://nodeapi.kuloutiantang.top/in/' + window.btoa(window.location.host))
})
</script>

<template>
  <n-config-provider :theme="theme">
    <n-dialog-provider>
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style scoped></style>
