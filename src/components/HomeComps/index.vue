<template>
  <div class="home-container">
    <Carousel />
    <Serve />
  </div>
</template>

<script setup lang="ts">
import Carousel from './Carousel/index.vue'
import Serve from './Serve/index.vue'
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 1500px;
}
</style>
