<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useOsTheme, darkTheme, NConfigProvider, NDialogProvider, NMessageProvider } from 'naive-ui'
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
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
