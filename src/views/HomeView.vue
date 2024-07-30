<script setup>
import { ref, onMounted } from 'vue'
import VersionNumber from '@/components/VersionNumber.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const colorR = ref(255)
const colorG = ref(255)
const colorB = ref(255)
const count = ref(0)
const targetColor = ref([255, 255, 255])
const step = ref(3)

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
}
/**
 * 动态颜色
 * @description 激活颜色渐变
 */
const dynamicColors = () => {
  let minTime = 7
  let maxTime = 14
  /**
   * 运算R
   */
  const dynamicR = () => {
    setTimeout(
      () => {
        colorR.value = gradient(colorR.value)
        dynamicR()
      },
      Rand(minTime, maxTime)
    )
  }
  /**
   * 运算G
   */
  const dynamicG = () => {
    setTimeout(
      () => {
        colorG.value = gradient(colorG.value)
        dynamicG()
      },
      Rand(minTime, maxTime)
    )
  }
  /**
   * 运算B
   */
  const dynamicB = () => {
    setTimeout(
      () => {
        colorB.value = gradient(colorB.value)
        dynamicB()
      },
      Rand(minTime, maxTime)
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
 * @returns {number}
 */
const gradient = (c) => {
  c += Rand(-1, 1)
  c = c < 0 ? 0 : c
  c = c > 255 ? 255 : c
  return c
}

const accumulation = () => {
  count.value++
  if (count.value >= step.value) {
    count.value = 0
    // 跳转
    router.push('/understand')
  } else {
    colorR.value += (targetColor.value[0] - colorR.value) * (1 / (step.value - count.value))
    colorG.value += (targetColor.value[1] - colorG.value) * (1 / (step.value - count.value))
    colorB.value += (targetColor.value[2] - colorB.value) * (1 / (step.value - count.value))
  }
}
</script>

<template>
  <div
    class="mid"
    :style="'filter: drop-shadow(0 0 10vh rgb(' + colorR + ',' + colorG + ',' + colorB + '))'"
  >
    <div class="select-none" @click="accumulation">
      <img
        :style="'filter: drop-shadow(0 100vh 0 rgb(' + colorR + ',' + colorG + ',' + colorB + '))'"
        src="/src/assets/logop.png"
      />
    </div>
  </div>
  <div class="bottom" :style="'color:rgb(' + colorR + ',' + colorG + ',' + colorB + ')'">
    <VersionNumber :versionNumber="'鲁ICP备2022011940号-1'" />
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
  > div {
    position: relative;
    width: var(--edge-length);
    height: var(--edge-length);
    filter: drop-shadow(0 0 2px rgb(0, 0, 0));
    > img {
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
