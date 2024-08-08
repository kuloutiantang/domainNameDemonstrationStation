<script setup>
import { onMounted } from 'vue'
import VersionNumber from '@/components/VersionNumber.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useColorStore } from '@/stores/color'
import axios from 'axios'
const color = useColorStore()

onMounted(() => {
  !color.beReady && color.init(7)
  // 访问记录
  logIn()
})

/**
 * 静默登录1
 */
const logIn = () => {
  axios.get('http://nodeapi.kuloutiantang.top/in')
}

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
    <n-carousel class="w-100vw h-100vh" direction="vertical" mousewheel>
      <div class="w-full h-full mid">
        <div @click="accumulation" class="select-none">
          <img src="/src/assets/logop.png" />
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <div
          @click="router.push('/understand')"
          class="select-none text-7rem cursor-pointer"
          :style="{ color: 'var(--edge-theme-color)' }"
        >
          知识碎片
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <div>...</div>
      </div>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
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
.custom-dots {
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 2vh;
  height: 93vh;
  right: 1vw;
}

.custom-dots li {
  display: block;
  height: 62vh;
  width: 7px;
  margin: 7px 0;
  border-radius: 7px;
  cursor: pointer;
  transition:
    flex 0.7s,
    background-color 0.21s cubic-bezier(0.4, 0, 0.2, 1);
  flex: auto;
  background-color: var(--color-border-hover);
}

.custom-dots li.is-active {
  flex: none;
  background: var(--edge-theme-color);
}
</style>
