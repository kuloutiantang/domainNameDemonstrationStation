<script setup>
defineProps({
  versionNumber: {
    type: String,
    required: true,
    default: '版号'
  }
})
</script>

<template>
  <div class="line">
    <a tabIndex="-1" href="http://beian.miit.gov.cn/" target="_blank" rel="noopener">{{
      versionNumber
    }}</a>
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
