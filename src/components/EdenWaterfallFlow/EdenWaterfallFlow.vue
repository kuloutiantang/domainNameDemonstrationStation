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
  calculateSorting()
})

/**
 * 刷新
 */
const calculateSorting = async () => {
  await nextTick()
  allocationColumn()
  rendering()
  await nextTick()
  deleteSlot()
}
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
    sortArr[thisalign] += original.value.children[index].scrollHeight + 2 + spacing.value
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
      shows.value.children[2 * original.value.children[index].align].appendChild(
        original.value.children[index]
      )
  }
}
/**
 * 删除插槽
 */
const deleteSlot = () => {
  original.value.innerHTML = ''
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
  transform: rotateY(90deg);
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
