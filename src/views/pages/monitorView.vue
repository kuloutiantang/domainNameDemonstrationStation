<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
import numeral from 'numeral'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// antV
import { Chart } from '@antv/g2'

// 状态管理
import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { useColorStore } from '@/stores/color'
const color = useColorStore()

// 数字数据
const dataNumber = ref([])
// 表格数据
const table1Container = ref(null)
const table2Container = ref(null)
const table1 = ref({})
const table2 = ref({})

onMounted(() => {
  !color.beReady && color.init(7)
  getData()
})

/**
 * 获取数据
 */
const getData = async () => {
  let numberArr = null
  await axios
    .get('http://nodeapi.kuloutiantang.top/www/log/monitor/' + window.btoa(window.location.host))
    .then((res) => {
      // 数字数据处理
      numberArr = res.data.statisticsNumber
      Object.keys(res.data.statisticsNumber).forEach((key) => {
        numberArr[key].value = numeral(res.data.statisticsNumber[key].value).format('000,0')
      })
      // 表格数据处理
      // 七日新增
      let table1Original = []
      res.data.statisticsTable.new7table_query.data.map((item, key) => {
        table1Original[key] = {
          day: dayjs(item.day).locale('zh-cn').fromNow(),
          num: +item.num
        }
      })
      console.log(table1Original)
      table1.value.title = res.data.statisticsTable.new7table_query.name
      table1.value.options = {
        theme: 'classicDark',
        type: 'view',
        autoFit: true,
        data: {
          value: table1Original,
          transform: [
            {
              type: 'rename',
              day: '日期',
              num: '人数'
            }
          ]
        },
        encode: { x: '日期', y: '人数' },
        axis: {
          x: { title: null, tick: false, line: true },
          y: { title: null, grid: false, tick: false, label: false }
        },
        children: [
          { type: 'line', encode: { shape: 'smooth' } },
          { type: 'point', tooltip: false },
          {
            type: 'text',
            encode: { x: '日期', y: '人数', text: '人数' },
            style: { fill: 'rgba(230, 237, 243, 0.64)', textAlign: 'center', dy: -10 },
            tooltip: false
          }
        ],
        text: {
          fontSize: '14px'
        },
        color: { palette: 'greys' }
      }
      // 七日访问
      let table2Original = []
      res.data.statisticsTable.all7table_query.data.map((item, key) => {
        table2Original[key] = {
          day: dayjs(item.day).locale('zh-cn').fromNow(),
          num: +item.num
        }
      })
      table2.value.title = res.data.statisticsTable.all7table_query.name
      table2.value.options = {
        theme: 'classicDark',
        type: 'view',
        autoFit: true,
        data: {
          value: table2Original,
          transform: [
            {
              type: 'rename',
              day: '日期',
              num: '人数'
            }
          ]
        },
        encode: { x: '日期', y: '人数' },
        axis: {
          x: { title: null, tick: false, line: true },
          y: { title: null, grid: false, tick: false, label: false }
        },
        children: [
          { type: 'line', encode: { shape: 'smooth' } },
          { type: 'point', tooltip: false },
          {
            type: 'text',
            encode: { x: '日期', y: '人数', text: '人数' },
            style: { fill: 'rgba(230, 237, 243, 0.64)', textAlign: 'center', dy: -10 },
            tooltip: false
          }
        ],
        text: {
          fontSize: '14px'
        },
        color: { palette: 'greys' }
      }
    })
  // 数字数据
  dataNumber.value = numberArr
  // 表
  renderBarChart(table1Container.value, table1.value.options)
  renderBarChart(table2Container.value, table2.value.options)
}

const renderBarChart = (container, options) => {
  const chart = new Chart({
    container
  })
  chart.options(options)
  chart.render()
  return chart
}
</script>
<template>
  <div
    class="box-border w-100vw h-100vh overflow-hidden overflow-y-auto flex flex-col justify-start items-center"
    :style="{
      '--var-theme-color': color.themeColor,
      '--var-theme-opacity-color': color.themeColorOp(0.07)
    }"
  >
    <n-affix
      :top="0"
      :trigger-top="0"
      class="box-border bg-theme w-full h-70px flex flex-col justify-center items-center border-1px border-b-solid z-2 <xl:(hidden)"
      style="color: var(--var-theme-color)"
    >
      <n-page-header class="w-1200px">
        <template #title>
          <div class="flex flex-row justify-start items-center">
            <div
              @click="router.push('/')"
              class="cursor-pointer size-35px transition-777 i-solar-home-smile-bold-duotone"
              style="color: var(--var-theme-color)"
            ></div>
            <div class="w-21px"></div>
            <div
              @click="router.go()"
              class="fw-900 text-28px lh-42px cursor-pointer select-none"
              style="color: var(--var-theme-color)"
            >
              监控
            </div>
          </div>
        </template>
        <template #extra>
          <n-space>
            <n-button v-if="user.isLogin" @click="user.logout()" strong type="error">退出</n-button>
            <div v-if="user.isLogin" class="h-full flex justify-center items-center select-none">
              <span>{{ user.user.email }}</span>
            </div>
          </n-space>
        </template>
      </n-page-header>
    </n-affix>
    <div class="h-70px"></div>
    <div class="w-1200px flex flex-col justify-start items-center">
      <div class="w-full text-2rem mt-3.5rem mb-1.4rem">统计数据</div>
      <div v-if="dataNumber" class="box w-full flex flex-row justify-start items-center gap-2rem">
        <div
          v-for="(item, index) in dataNumber"
          :key="index"
          class="boxson rounded-0.5rem p-1.5rem"
          style="background-color: var(--var-theme-opacity-color)"
        >
          <div class="text-1rem">{{ item.name }}</div>
          <div class="h-0.5rem"></div>
          <div class="text-3rem" style="color: var(--var-theme-color)">{{ item.value }}</div>
        </div>
      </div>
      <div class="w-full text-2rem mt-3.5rem mb-1.4rem">统计图表</div>
      <div class="box w-full flex flex-row justify-start items-center gap-2rem">
        <div v-if="table1" class="boxson">
          <div class="text-1rem">{{ table1.title }}</div>
          <div ref="table1Container" class="w-384px h-216px"></div>
        </div>
        <div v-if="table2" class="boxson">
          <div class="text-1rem">{{ table2.title }}</div>
          <div ref="table2Container" class="w-384px h-216px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--[if lt IE 11]>
  <style>
    .box {
      margin: -21px 0 0 -21px;
    }
    .boxson {
      margin: 21px 0 0 21px;
    }
  </style>
<![endif]-->
