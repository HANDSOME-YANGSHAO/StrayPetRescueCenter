<template>
  <div class="badge-container">
    <slot name="icon"></slot>
    <div class="number">{{ number }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: Number
})

</script>

<style scoped lang="scss">
.badge-container {
  margin-top: 10px;
  width: 70px;
  height: 20px;
  display: flex;
  justify-content: right;
  .number {
    margin-left: 10px;
    width: 30px;
    color: rgba(51, 51, 51, 0.5);
    font: 12px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
    line-height: 20px;
    &:hover {
      color: #f7811c;
    }
  }
}
</style>
