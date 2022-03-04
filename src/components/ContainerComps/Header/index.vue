<template>
  <div class="header-container">
    <div class="logo">
      <img src="./img/logo.png" alt="logo" />
    </div>
    <el-menu default-active="home" mode="horizontal" :router="true" active-text-color="#ef4136">
      <el-menu-item
        v-for="item in menuList"
        :key="item.path"
        :index="item.path"
        @click="onActive"
      >{{ item.meta.title }}</el-menu-item>
    </el-menu>
    <div class="operations">
      <img class="avatar" :src="avatarSrc" />
      <span class="userName">{{ name }}</span>
      <div class="logout" v-if="isLogin">
        <t-icon name="logout" size="25px"></t-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'

const menuList = routes.filter((item: RouteRecordRaw) => {
  return item.name !== 'Index' && item.name !== 'Login'
})

const lastPath = localStorage.getItem('lastPath')
const currentPath = ref('')
if (!lastPath) {
  currentPath.value = '/home'
} else {
  currentPath.value = lastPath
}
const onActive = (active) => {
  localStorage.setItem('lastPath', `${active}`)
}

const userInfo = computed(() => {
  return JSON.parse(localStorage.getItem('userInfo') as string)
})
const avatarSrc = computed(() => {
  return userInfo.value
    ? 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2Fe1b8508cly1gc6qj475ctj20u00tutan.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648908845&t=b225b3d3cecfb7c550bd7bcd4595ea77'
    : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F52708%2F%2FsBuoyFCYxwYuQORKgby1y40Zg8nYzc2IvMeucblk.jpeg&refer=http%3A%2F%2Fimg.91huoke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648908845&t=36a1ac79ec1d3c2403516a2460c43396'
})
const name = computed(() => {
  return userInfo.value ? 'dsadsadasdas登陆过后的用户姓名userInfo.userName' : '游客状态！'
})
const isLogin = computed(() => {
  return Boolean(userInfo.value)
})
</script>

<style scoped lang="scss">
.header-container {
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  height: 100px;
  width: 100%;
  z-index: 999;
  padding: 0px 40px;
  box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-menu {
    height: 98%;
    width: 60%;
  }
  .logo > img {
    height: 60px;
    width: 310px;
  }
  .operations {
    margin-right: 50px;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .avatar {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    .userName {
      width: 100px;
      line-height: 100%;
      text-align: center;
      font-size: 15px;
      color: #000;
      font-weight: bold;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
