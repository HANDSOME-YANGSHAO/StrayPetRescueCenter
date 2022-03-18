<template>
  <div class="home-container">
    <Carousel />
    <Serve />
    <Introduction />
    <Communication />
    <Suggestion />
  </div>
</template>

<script setup lang="ts">
import Carousel from './Carousel/index.vue'
import Serve from './Serve/index.vue'
import Introduction from './Introduction/index.vue'
import Communication from './Communication/index.vue'
import Suggestion from './Suggestion/index.vue'
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
}
</style>
