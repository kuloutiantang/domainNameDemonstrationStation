<script setup>
import { ref, onMounted, computed } from 'vue'
import VersionNumber from '@/components/VersionNumber.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const BLACK = [13, 17, 23]
const WHITE = [255, 255, 255]
const STEP = 3

const colorR = ref(255)
const colorG = ref(255)
const colorB = ref(255)
const count = ref(0)
const targetColor = ref([255, 255, 255])

const minTime = computed(() => {
  return Math.round(7 * ((100 * count.value) / STEP + 1))
})
const maxTime = computed(() => {
  return Math.round(2 * minTime.value)
})

onMounted(() => {
  initialColor()
  dynamicColors()
})

/**
 * 初始化颜色
 */
const initialColor = () => {
  let currentHour = new Date().getHours()
  if (currentHour < 1 || 18 <= currentHour) {
    /* 夜间 rgb(242, 123, 31) */
    colorR.value = 242
    colorG.value = 123
    colorB.value = 31
  } else if (1 <= currentHour && currentHour < 5) {
    /* 晚安 rgb(139, 38, 113) */
    colorR.value = 139
    colorG.value = 38
    colorB.value = 113
  } else if (5 <= currentHour && currentHour < 10) {
    /* 白天 rgb(140, 194, 105) */
    colorR.value = 140
    colorG.value = 194
    colorB.value = 105
  } else if (10 <= currentHour && currentHour < 14) {
    /* 午饭 rgb(242, 185, 178) */
    colorR.value = 242
    colorG.value = 185
    colorB.value = 178
  } else if (14 <= currentHour && currentHour < 18) {
    /* 下午 rgb(35, 118, 183) */
    colorR.value = 35
    colorG.value = 118
    colorB.value = 183
  }
  // 获取系统颜色
  let isLight = window.matchMedia('(prefers-color-scheme: light)').matches
  // 设置目标颜色
  if (isLight) {
    targetColor.value = WHITE
  } else {
    targetColor.value = BLACK
  }
}
/**
 * 动态颜色
 * @description 激活颜色渐变
 */
const dynamicColors = () => {
  /**
   * 运算R
   */
  const dynamicR = () => {
    setTimeout(
      () => {
        colorR.value = gradient(colorR.value, BLACK[0], WHITE[0])
        dynamicR()
      },
      Rand(minTime.value, maxTime.value)
    )
  }
  /**
   * 运算G
   */
  const dynamicG = () => {
    setTimeout(
      () => {
        colorG.value = gradient(colorG.value, BLACK[1], WHITE[1])
        dynamicG()
      },
      Rand(minTime.value, maxTime.value)
    )
  }
  /**
   * 运算B
   */
  const dynamicB = () => {
    setTimeout(
      () => {
        colorB.value = gradient(colorB.value, BLACK[2], WHITE[2])
        dynamicB()
      },
      Rand(minTime.value, maxTime.value)
    )
  }
  dynamicR()
  dynamicG()
  dynamicB()
}
/**
 * 随机整数
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 * @description [min, max]范围内生成随机整数
 */
const Rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  let result = Math.floor(Math.random() * (max - min + 1)) + min
  return result
}
/**
 * 色值渐变
 * @param c 色值
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
const gradient = (c, min = 0, max = 255) => {
  c += Rand(-1, 1)
  c = c < min ? min : c
  c = c > max ? max : c
  return c
}

/**
 * 点击
 */
const accumulation = () => {
  count.value++
  if (count.value >= STEP) {
    count.value = 0
    // 跳转
    router.push('/understand')
  } else {
    colorR.value += (targetColor.value[0] - colorR.value) * (1 / (STEP - count.value))
    colorG.value += (targetColor.value[1] - colorG.value) * (1 / (STEP - count.value))
    colorB.value += (targetColor.value[2] - colorB.value) * (1 / (STEP - count.value))
  }
}
</script>

<template>
  <div
    class="mid"
    :style="'filter: drop-shadow(0 0 10vh rgb(' + colorR + ',' + colorG + ',' + colorB + '))'"
  >
    <div
      class="select-none"
      style="filter: drop-shadow(0 0 2px var(--color-background))"
      @click="accumulation"
    >
      <img
        :style="'filter: drop-shadow(0 100vh 0 rgb(' + colorR + ',' + colorG + ',' + colorB + '))'"
        src="/src/assets/logop.png"
      />
    </div>
  </div>
  <div class="bottom">
    <VersionNumber
      :versionNumber="'鲁ICP备2022011940号-1'"
      :color="'rgb(' + colorR + ',' + colorG + ',' + colorB + ')'"
    />
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
