<script setup>
import { onMounted } from 'vue'
import VersionNumber from '@/components/VersionNumber.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useColorStore } from '@/stores/color'
const color = useColorStore()

onMounted(() => {
  !color.beReady && color.init()
})

/**
 * 点击
 */
const accumulation = () => {
  color.approaching()
  if (color.itSTime) {
    router.push('/understand')
  }
}
</script>

<template>
  <div class="mid" :style="'filter: drop-shadow(0 0 10vh ' + color.themeColor + ')'">
    <div
      class="select-none"
      style="filter: drop-shadow(0 0 2px var(--color-background))"
      @click="accumulation"
    >
      <img
        :style="'filter: drop-shadow(0 100vh 0 ' + color.themeColor + ')'"
        src="/src/assets/logop.png"
      />
    </div>
  </div>
  <div class="bottom">
    <VersionNumber :versionNumber="'鲁ICP备2022011940号-1'" :color="color.themeColor" />
  </div>
</template>

<style scoped>
.mid {
  --edge-length: min(75vw, 75vh);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
    width: var(--edge-length);
    height: var(--edge-length);
    & > img {
      position: absolute;
      top: -100vh;
      width: var(--edge-length);
      height: var(--edge-length);
    }
  }
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
