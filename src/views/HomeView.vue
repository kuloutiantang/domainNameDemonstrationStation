<script setup>
import { onMounted } from 'vue'
import VersionNumber from '@/components/VersionNumber.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useColorStore } from '@/stores/color'
const color = useColorStore()
import { NCarousel } from 'naive-ui'

onMounted(() => {
  !color.beReady && color.init(7)
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
  <div :style="'--edge-theme-color: ' + color.themeColor + ';'">
    <NCarousel class="w-100vw h-100vh" direction="vertical" :show-dots="false" mousewheel>
      <div class="w-full h-full mid">
        <div @click="accumulation" class="select-none">
          <img src="/src/assets/logop.png" />
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <div
          @click="router.push('/understand')"
          class="select-none text-140px cursor-pointer"
          :style="{ color: 'var(--edge-theme-color)' }"
        >
          知识碎片
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <div>...</div>
      </div>
    </NCarousel>
    <div class="bottom">
      <VersionNumber :versionNumber="'鲁ICP备2022011940号-1'" :color="color.themeColor" />
    </div>
  </div>
</template>

<style scoped>
.mid {
  --edge-length: min(75vw, 75vh);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 10vh var(--edge-theme-color));
  & > div:first-child {
    position: relative;
    width: var(--edge-length);
    height: var(--edge-length);
    filter: drop-shadow(0 0 2px var(--color-background));
    & > img {
      position: absolute;
      top: -100vh;
      width: var(--edge-length);
      height: var(--edge-length);
      filter: drop-shadow(0 100vh 0 var(--edge-theme-color));
    }
  }
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
p a i {
  cursor: pointer;
}
</style>
