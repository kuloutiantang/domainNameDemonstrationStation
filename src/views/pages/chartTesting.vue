<script setup>
import { ref, onMounted } from 'vue'

// 引入 ECharts
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
])

/**
 * echarts
 */
const ec = () => {
  var chartDom = document.getElementById('main')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    title: {
      text: 'Accumulated Waterfall Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        let tar
        if (params[1] && params[1].value !== '-') {
          tar = params[1]
        } else {
          tar = params[2]
        }
        return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    legend: {
      data: ['Expenses', 'Income']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: (function () {
        let list = []
        for (let i = 1; i <= 11; i++) {
          list.push('Nov ' + i)
        }
        return list
      })()
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        silent: true,
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'bottom'
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
      }
    ]
  }

  option && myChart.setOption(option)
}

// antV
import { Chart } from '@antv/g2'

const container = ref(null)
const renderBarChart = (container) => {
  const chart = new Chart({
    container,
    theme: 'classicDark',
    autoFit: true
  })

  chart
    .interval()
    .data([
      { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
      { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
      { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
      { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
      { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
      { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
      { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
      { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
      { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
      { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
      { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
      { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
      { month: 'Total', start: 0, end: 3164946 }
    ])
    .encode('x', 'month')
    .encode('y', ['end', 'start'])
    .encode('color', (d) =>
      d.month === 'Total' ? 'Total' : d.profit > 0 ? 'Increase' : 'Decrease'
    )
    .axis('y', { labelFormatter: '~s' })
    .tooltip(['start', 'end'])

  chart.render()
}

onMounted(() => {
  ec()
  renderBarChart(container.value)
})
</script>
<template>
  <div class="flex flex-row justify-center items-center">
    <div id="main" class="w-700px h-700px"></div>
    <div class="w-40px"></div>
    <div ref="container" class="w-700px h-700px"></div>
  </div>
</template>
