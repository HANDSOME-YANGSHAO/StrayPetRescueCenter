<template>
  <div class="loveList-container">
    <div class="loveList-header">
      <span class="icon">|</span>
      <span class="text">{{ `爱心名单` }}</span>
    </div>
    <div class="loveList-body">
      <el-carousel
        height="100px"
        direction="vertical"
        loop
        interval="3000"
        indicator-position="none"
      >
        <el-carousel-item v-for="item in loveList" :key="item">
          <span>{{ item.userName }}</span>
          <span>{{ item.location }}</span>
          <span>{{ item.donation + '元' }}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sum-container">
      <div class="sum-header">
        <span class="icon">|</span>
        <span class="text">{{ `爱心善款总计` }}</span>
      </div>
      <div class="sum-body">
        <el-card>
          <span>{{ `累计爱心善款收入：${sum[0]}` }}</span>
        </el-card>
        <el-card>
          <span>{{ `累计爱心善款支出：${sum[1]}` }}</span>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue'

/* 爱心捐赠列表数据 */
const loveList: Ref<INFO.LoveList[]> = ref([] as INFO.LoveList[])

/* 爱心善款总计 */
const sum: Ref<number[]> = ref([]) // 假数据

onMounted(() => {
  console.log('发送请求获取爱心列表数据')
  loveList.value = [
    { userName: '李先生', location: '云南曲靖市富源县文本溢出测试文本溢测试文本溢出测试文本溢测试文本溢出测试文本溢测试', donation: 200 },
    { userName: '谢先生', location: '重庆', donation: 100 },
    { userName: '王女士', location: '云南', donation: 600 },
    { userName: '帅哥李', location: '重庆', donation: 200 }
  ]

  console.log('发送请求获取爱心善款累计收入和支出')
  sum.value = [1170, 841]
})
</script>

<style scoped lang="scss">
.loveList-container {
  .loveList-header {
    line-height: 100px;
    font-size: 25px;
    color: #ff6620;
    .text {
      margin-left: 15px;
    }
  }
  .loveList-body {
    margin-top: 15px;
    height: 100px;
    background-color: #fafafa;
    .el-carousel {
      width: 100%;
      height: 100%;
      .el-carousel__item {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 14px;
          color: #666666;
          text-align: center;
          width: 30%;
          height: 50px;
          line-height: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.sum-container {
  .sum-header {
    line-height: 100px;
    font-size: 25px;
    color: #ff6620;
    .text {
      margin-left: 15px;
    }
  }
  .sum-body {
    height: 50px;
    display: flex;
    justify-content: space-around;
    .el-card {
      width: 40%;
      height: 50px;
      display: flex;
      span {
      }
    }
  }
}
</style>
