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
  { title: '流浪宠物领养', imgSrc: './homeImg/3.jpeg' },
  { title: '宠物喂养', imgSrc: './homeImg/4.webp' },
  { title: '捐献爱心', imgSrc: './homeImg/5.jpeg' },
  { title: '宠物商城', imgSrc: './homeImg/6.jpeg' }
])
</script>

<style scoped lang="scss">
.serve-container {
  padding: 0 2rem;
  margin-top: 0.5rem;
  .serve-title {
    text-align: center;
    .theme {
      color: #ef4136;
      font-size: 0.35rem;
      font-weight: bolder;
      line-height: 1rem;
    }
    .guide {
      font: 14px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .serve-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.4rem;
    .el-card {
      width: 2.8rem;
      height: 2.5rem;
      border-radius: 0.1rem;
      position: relative;
      img {
        width:2.8rem;
        height:2.8rem;
        border-radius: 10px;
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
