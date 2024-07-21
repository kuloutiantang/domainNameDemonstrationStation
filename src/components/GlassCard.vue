<script setup></script>

<template>
  <div class="glass box-border">
    <slot></slot>
  </div>
</template>

<style scoped>
.glass {
  border: 1px solid var(--color-border-hover);
  background: var(--color-background-soft);
  border-radius: 14px;
  flex: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
}
</style>
