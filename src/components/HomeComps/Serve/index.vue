<template>
  <div class="serve-container">
    <div class="serve-title">
      <div class="theme">本平台为救助流浪宠物提供服务</div>
      <span class="guide">解决流浪宠物问题</span>
    </div>
    <div class="serve-card">
      <el-card :body-style="{ padding: '0px' }" v-for="item in cardList" :key="item.imgSrc">
        <img :src="item.imgSrc" />
        <div class="modal">{{ item.title }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const cardList = reactive([
  { title: '流浪宠物领养', imgSrc: './homeImg/petAdoption.jpeg' },
  { title: '宠物喂养', imgSrc: './homeImg/petFeeding.jpeg' },
  { title: '捐献爱心', imgSrc: './homeImg/donationLove.jpeg' },
  { title: '宠物商城', imgSrc: './homeImg/petStore.jpeg' }
])
</script>

<style scoped lang="scss">
.serve-container {
  padding: 0 2rem;
  margin-top: 0.5rem;
  .serve-title {
    text-align: center;
  }
  .serve-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.4rem;
    .el-card {
      width: 3.5rem;
      height: 3.5rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform: scale(1);
        &:hover {
          cursor: pointer;
          transition: transform 0.5s;
          transform: scale(1.1);
        }
      }
      .modal {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.3rem;
        text-align: center;
        line-height: 0.3rem;
        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>
