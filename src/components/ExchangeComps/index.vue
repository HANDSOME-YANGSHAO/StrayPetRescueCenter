<template>
<div class="exchangeCenter-container">
  <div class="nav">
    <NavArea />
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script setup lang="ts">
import NavArea from './NavArea/index.vue'
</script>

<style scoped lang="scss">
  .exchangeCenter-container {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 15%;
  }
</style>
