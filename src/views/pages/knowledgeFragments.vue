<script setup>
import GlassCard from '@/components/GlassCard.vue'
import EdenWaterfallFlow from '@/components/EdenWaterfallFlow/EdenWaterfallFlow.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>
<template>
  <div class="w-100vw h-100vh flex flex-col justify-start items-center">
    <div class="box-border w-960px flex-auto p-2rem">
      <EdenWaterfallFlow class="w-full h-full" :gap="49">
        <GlassCard class="p-20px">
          <div>1</div>
        </GlassCard>
        <GlassCard>
          <div>2</div>
          <div>2</div>
        </GlassCard>
        <GlassCard>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
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
      </EdenWaterfallFlow>
    </div>
  </div>
</template>
<style scoped></style>
