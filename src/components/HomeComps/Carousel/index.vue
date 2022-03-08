<template>
    <el-carousel :interval="4000" trigger="click" height="900px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const imgList = reactive([
  './img/1.jpg',
  './img/2.jpg'
])

</script>

<style scoped lang="scss">
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
