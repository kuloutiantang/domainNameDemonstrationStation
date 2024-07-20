<script setup></script>

<template>
  <div class="glass box-border">
    <slot></slot>
  </div>
</template>

<style scoped>
.glass {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.01);
  border-radius: 14px;
  flex: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
}
</style>
