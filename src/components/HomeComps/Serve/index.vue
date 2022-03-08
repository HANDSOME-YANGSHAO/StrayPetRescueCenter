<template>
  <div class="serve-container">
    <div class="serve-title">
      <h3>本流浪宠物救助系统提供的服务</h3>
      <span>解决宠物问题</span>
    </div>
    <div class="serve-card">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div class="modal">{{ '服务内容' }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'

// const cardList = reactive([
//   { title: '领养宠物', imgSrc: '' }
// ])
</script>

<style scoped lang="scss">
.serve-container {
  margin-top: 50px;
  .serve-title {
    text-align: center;
    h3 {
      color: #ef4136;
    }
    span {
      font: 14px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .serve-card {
    margin-bottom: 20px;
    .el-card {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .modal {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
