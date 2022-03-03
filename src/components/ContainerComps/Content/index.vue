<template>
  <div class="content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.content {
  margin-top: 100px;
  padding: 20px 40px;
  background-color: rgb(255, 165, 0, 0.3);
}
</style>
