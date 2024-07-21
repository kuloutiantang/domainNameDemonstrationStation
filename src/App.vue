<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useOsTheme, darkTheme, NConfigProvider } from 'naive-ui'
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
