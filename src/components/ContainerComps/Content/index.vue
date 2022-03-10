<template>
  <div class="content">
    <router-view></router-view>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import BackTop from '@/components/CommonComps/BackTop/index.vue'
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  margin-top: 100px;
}
</style>
