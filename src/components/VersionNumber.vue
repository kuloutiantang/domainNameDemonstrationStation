<script setup>
defineProps({
  versionNumber: {
    type: String,
    required: true,
    default: '版号'
  },
  color: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<template>
  <div class="line">
    <a
      tabIndex="-1"
      href="http://beian.miit.gov.cn/"
      target="_blank"
      rel="noopener"
      :style="{ color: color }"
      >{{ versionNumber }}</a
    >
  </div>
</template>

<style scoped>
.line {
  width: 100%;
  height: 2rem;
  text-align: center;
  > a {
    line-height: 2rem;
  }
}
</style>
