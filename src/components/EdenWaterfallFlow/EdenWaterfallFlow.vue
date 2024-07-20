<script setup>
import { ref, onMounted, onUpdated } from 'vue'

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

const original = ref(null)
const shows = ref(null)

const column = ref(0)
const numberOfColumns = ref(0)
const rootWidth = ref(0)
const spacing = ref(0)
const itemWidth = ref(0)

onMounted(() => {
  // 列数
  column.value = props.col
  numberOfColumns.value = props.col * 2 - 1
  // 根元素宽度
  rootWidth.value = shows.value.offsetWidth
  // 间距
  spacing.value = props.gap
  // 计算列宽
  itemWidth.value =
    (rootWidth.value - (numberOfColumns.value - column.value) * spacing.value) / column.value
})
onUpdated(() => {
  allocationColumn()
  rendering()
})

/**
 * 元素高度分配列
 */
const allocationColumn = () => {
  let sortArr = []
  for (let index = 0; index < column.value; index++) {
    sortArr[index] = 0
  }
  for (let index = 0; index < original.value.children.length; index++) {
    let thisalign = findMinIndex(sortArr)
    original.value.children[index].align = thisalign
    sortArr[thisalign] += original.value.children[index].scrollHeight
  }
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
 * 重新渲染
 */
const rendering = () => {
  // 清空
  for (let index = 0; index < original.value.children.length; index++) {
    shows.value.children[index] && (shows.value.children[index].innerHTML = '')
  }
  // 插入
  for (let index = 0; index < original.value.children.length; index++) {
    shows.value.children[2 * original.value.children[index].align] &&
      (shows.value.children[2 * original.value.children[index].align].innerHTML +=
        original.value.children[index].outerHTML)
  }
}
</script>

<template>
  <div>
    <div ref="original" class="hide">
      <slot></slot>
    </div>
    <div ref="shows" class="column box-border">
      <div
        v-for="n in numberOfColumns"
        :key="n"
        class="son"
        :style="{ '--spacing-px': spacing + 'px' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.hide {
  max-width: 100%;
  height: 0px;
  overflow: visible;
  transform: rotateY(90deg);
  display: flex;
  flex-flow: row nowrap;
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
      flex: auto;
    }
    & > * {
      margin-bottom: var(--spacing-px);
    }
  }
}
</style>
