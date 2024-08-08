import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', () => {
  // 常量颜色
  const WHITE = [255, 255, 255]
  const BLACK = [13, 17, 23]
  const BASE_TIME = 28
  const CHANGE_RATE = 2
  // 主题颜色
  const beReady = ref(false)
  const colorR = ref(0)
  const colorG = ref(0)
  const colorB = ref(0)
  const themeColorArr = computed(() => [colorR.value, colorG.value, colorB.value])
  const themeColor = computed(
    () => 'rgb(' + colorR.value + ',' + colorG.value + ',' + colorB.value + ')'
  )
  /**
   * 透明主题色
   * @param {number} op 透明度
   * @returns 透明主题色
   */
  const themeColorOp = (op) => {
    return 'rgb(' + colorR.value + ' ' + colorG.value + ' ' + colorB.value + ' / ' + op + ')'
  }
  // 其他颜色
  const targetColorArr = ref([255, 255, 255]) // 目标颜色
  const targetColor = computed(() => 'rgb(' + targetColorArr.value.join(',') + ')')
  const initialColorArr = ref([255, 255, 255]) // 初始颜色
  const initialColor = computed(() => 'rgb(' + initialColorArr.value.join(',') + ')')
  // 时间
  const step = ref(3) // 步长
  const count = ref(0) // 当前步数
  const itSTime = ref(false) // 结束
  const minTime = computed(() => {
    return Math.round(((100 * count.value) / step.value + 1) * BASE_TIME)
  })
  const maxTime = computed(() => {
    return Math.round(((100 * count.value) / step.value + 1) * BASE_TIME * 2)
  })
  /**
   * 初始化颜色
   */
  const initColor = () => {
    // 按时间获取颜色
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
    initialColorArr.value = [colorR.value, colorG.value, colorB.value]
    // 获取系统颜色
    let isLight = window.matchMedia('(prefers-color-scheme: light)').matches
    // 设置目标颜色
    if (isLight) {
      targetColorArr.value = WHITE
    } else {
      targetColorArr.value = BLACK
    }
  }
  /**
   * 动态主题色
   */
  const dynamicColors = () => {
    const dynamicR = () => {
      setTimeout(
        () => {
          colorR.value = gradient(colorR.value, BLACK[0], WHITE[0])
          dynamicR()
        },
        Rand(minTime.value, maxTime.value)
      )
    }
    const dynamicG = () => {
      setTimeout(
        () => {
          colorG.value = gradient(colorG.value, BLACK[1], WHITE[1])
          dynamicG()
        },
        Rand(minTime.value, maxTime.value)
      )
    }
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
   * 初始化
   */
  const init = (s = 3) => {
    step.value = s
    // 颜色
    initColor()
    // 渐变
    dynamicColors()
    // 状态
    beReady.value = true
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
    c += Rand(-CHANGE_RATE, CHANGE_RATE)
    c = c < min ? min : c
    c = c > max ? max : c
    return c
  }
  const approaching = () => {
    count.value += 1
    if (count.value >= step.value) {
      itSTime.value = true
      count.value = 0
      colorR.value = initialColorArr.value[0]
      colorG.value = initialColorArr.value[1]
      colorB.value = initialColorArr.value[2]
    } else {
      itSTime.value = false
      colorR.value += (targetColorArr.value[0] - colorR.value) * (1 / (step.value - count.value))
      colorG.value += (targetColorArr.value[1] - colorG.value) * (1 / (step.value - count.value))
      colorB.value += (targetColorArr.value[2] - colorB.value) * (1 / (step.value - count.value))
    }
  }

  return {
    beReady,
    init,
    colorR,
    colorG,
    colorB,
    themeColorArr,
    themeColor,
    targetColor,
    initialColor,
    approaching,
    itSTime,
    themeColorOp
  }
})
