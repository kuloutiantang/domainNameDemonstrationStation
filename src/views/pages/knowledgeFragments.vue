<script setup>
import GlassCard from '@/components/GlassCard.vue'
import EdenWaterfallFlow from '@/components/EdenWaterfallFlow/EdenWaterfallFlow.vue'
import { ref, onMounted } from 'vue'

import { marked } from 'marked'

const text = ref('')
const html = ref('')

onMounted(() => {
  text.value = '`let a = 1`'
  html.value = marked.parse(text.value)
})
</script>
<template>
  <div class="w-100vw h-100vh flex flex-col justify-start items-center">
    <div class="box-border w-1200px flex-auto p-2rem">
      <EdenWaterfallFlow class="w-full h-full" :gap="49">
        <GlassCard class="p-20px">
          <div
            class="flex flex-row flex-wrap justify-start items-center text-14px select-none lh-21px"
          >
            <div class="h-35px mr-14px">
              <div class="rd-7px px-7px cursor-pointer" :style="{ background: '#ff0000' + '22' }">
                技术
              </div>
            </div>
            <div class="h-35px mr-14px">
              <div class="rd-7px px-7px cursor-pointer" :style="{ background: '#ff0000' + '22' }">
                微软
              </div>
            </div>
            <div class="h-35px mr-14px">
              <div class="rd-7px px-7px cursor-pointer" :style="{ background: '#ff0000' + '22' }">
                Microsoft
              </div>
            </div>
            <div class="h-35px mr-14px">
              <div class="rd-7px px-7px cursor-pointer" :style="{ background: '#ff0000' + '22' }">
                Windows 11
              </div>
            </div>
            <div class="h-35px mr-14px">
              <div class="rd-7px px-7px cursor-pointer" :style="{ background: '#ff0000' + '22' }">
                Windows 10
              </div>
            </div>
          </div>
          <div class="h-14px"></div>
          <div>{{ text }}</div>
          <div class="h-14px"></div>
          <div class="text-14px select-none">2024年7月21日 12点28分</div>
        </GlassCard>
        <GlassCard class="p-20px">
          <div
            class="flex flex-row flex-wrap justify-start items-center text-14px select-none lh-21px"
          >
            <div class="h-35px mr-14px">
              <div class="bg-#fd9 bg-op-10 rd-7px px-7px cursor-pointer">技术</div>
            </div>
            <div class="h-35px mr-14px">
              <div class="bg-#fd9 bg-op-10 rd-7px px-7px cursor-pointer">JavaScript</div>
            </div>
            <div class="h-35px mr-14px">
              <div class="bg-#fd9 bg-op-10 rd-7px px-7px cursor-pointer">VUE</div>
            </div>
          </div>
          <div class="h-14px"></div>
          <pre>{{ text }}</pre>
          <div class="h-14px"></div>
          <div class="text-14px">2024年7月21日 12点28分</div>
        </GlassCard>
        <GlassCard class="p-20px">
          <div
            class="flex flex-row flex-wrap justify-start items-center text-14px select-none lh-21px"
          >
            <div class="bg-#fd9 bg-op-10 rd-7px px-7px cursor-pointer">技术</div>
            <div class="w-14px h-35px"></div>
            <div class="bg-#aaf bg-op-10 rd-7px px-7px cursor-pointer">JavaScript</div>
            <div class="w-14px h-35px"></div>
            <div class="bg-#afa bg-op-10 rd-7px px-7px cursor-pointer">VUE</div>
            <div class="w-14px h-35px"></div>
          </div>
          <div class="h-14px"></div>
          <div class="markdown-body" v-html="html"></div>
          <div class="h-14px"></div>
          <div class="text-14px">2024年7月21日 12点28分</div>
        </GlassCard>
        <GlassCard>
          <div>4</div>
          <div>4</div>
          <div>4</div>
          <div>4</div>
          <div>4</div>
          <div>4</div>
        </GlassCard>
        <GlassCard>
          <div>5</div>
          <div>5</div>
          <div>5</div>
          <div>5</div>
        </GlassCard>
        <GlassCard>
          <div>6</div>
          <div>6</div>
        </GlassCard>
        <GlassCard>
          <div>7</div>
        </GlassCard>
        <GlassCard>
          <div>8</div>
          <div>8</div>
        </GlassCard>
        <GlassCard>
          <div>9</div>
        </GlassCard>
        <GlassCard>
          <div>10</div>
        </GlassCard>
        <GlassCard>
          <div>11</div>
        </GlassCard>
        <GlassCard>
          <div>12</div>
        </GlassCard>
        <GlassCard>
          <div>13</div>
        </GlassCard>
        <GlassCard>
          <div>14</div>
        </GlassCard>
      </EdenWaterfallFlow>
    </div>
  </div>
</template>
<style scoped>
div > span > a > p {
  cursor: pointer;
  user-select: none;
}
</style>
