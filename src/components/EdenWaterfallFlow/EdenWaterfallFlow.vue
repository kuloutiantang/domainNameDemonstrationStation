<script setup>
import { ref, onMounted, onUpdated, nextTick } from 'vue'

const props = defineProps({
  gap: {
    type: Number,
    default: 14
  },
  col: {
    type: Number,
    default: 3
  }
})

const original = ref(null) // 原始元素
const shows = ref(null) // 显示元素

const column = ref(0) // 填充列数
const numberOfColumns = ref(0) // 子元素列数
const rootWidth = ref(0) // 根元素宽度
const spacing = ref(0) // 间距
const itemWidth = ref(0) // 元素宽度

onMounted(() => {
  // 计算数据
  calculateData()
  // 处理链接标签
  setAllLinksToOpenInNewTab()
})
onUpdated(() => {
  calculateSorting()
})

const calculateData = () => {
  // 列数
  column.value = props.col
  numberOfColumns.value = props.col * 2 - 1
  // 根元素宽度
  rootWidth.value = shows.value.offsetWidth >= 1200 ? 1200 : shows.value.offsetWidth
  // 间距
  spacing.value = props.gap
  // 计算列宽
  itemWidth.value =
    (rootWidth.value - (numberOfColumns.value - column.value) * spacing.value) / column.value
}

/**
 * 刷新
 */
const calculateSorting = async () => {
  // await nextTick()
  let sortArr = []
  let newNode = shows.value.children
  let oldNode = original.value.children
  let times = oldNode.length
  // 元素高度分配列
  for (let index = 0; index < column.value; index++) {
    sortArr[index] = 0
  }
  for (let index = 0; index < oldNode.length; index++) {
    let thisalign = findMinIndex(sortArr)
    oldNode[index].align = thisalign
    sortArr[thisalign] += oldNode[index].scrollHeight + 2 + spacing.value
  }
  // 清空
  for (let index = 0; index < times; index++) {
    newNode[index] && (newNode[index].innerHTML = '')
  }
  // 插入
  for (let index = 0; index < times; index++) {
    newNode[2 * oldNode[0].align] && (await newNode[2 * oldNode[0].align].appendChild(oldNode[0]))
  }
  await nextTick()
  deleteSlot()
}
/**
 * 数组中最小元素的下标
 * @param arr 待查找数组
 */
const findMinIndex = (arr) => {
  let minIndex = 0 // 假设第一个元素是最小的
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i // 更新最小值的下标
    }
  }
  return minIndex
}
/**
 * 清空插槽
 */
const deleteSlot = () => {
  original.value.innerHTML = ''
}

const setAllLinksToOpenInNewTab = () => {
  const links = document.querySelectorAll('a')
  links.forEach((link) => {
    if (!link.target) {
      link.target = '_blank'
    }
  })
}
</script>

<template>
  <div>
    <div ref="original" :style="{ '--son-item-width': itemWidth + 'px' }" class="hide">
      <slot></slot>
    </div>
    <div ref="shows" class="column box-border">
      <div
        v-for="n in numberOfColumns"
        :key="n"
        class="son"
        :style="{ '--spacing-px': spacing + 'px', '--width-px': itemWidth + 'px' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.hide {
  max-width: 100%;
  height: 0px;
  overflow: visible;
  transform: rotateY(0deg);
  display: flex;
  flex-flow: row nowrap;
  & > * {
    width: var(--son-item-width);
  }
}
.column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: start;
  & > .son {
    &:nth-child(2n) {
      width: var(--spacing-px);
      flex: none;
    }
    &:nth-child(2n + 1) {
      width: var(--width-px);
      flex: none;
    }
    & > * {
      margin-bottom: var(--spacing-px);
    }
  }
}
</style>
