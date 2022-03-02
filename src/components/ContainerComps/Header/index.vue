<template>
  <div class="headerContainer">
    <t-head-menu v-model="currentPath" theme="light" @change="changeHandler">
      <template #logo>
        <img src="../../../assets/猫咪.png" alt="logo" />
        <h1>流浪宠物救助中心</h1>
      </template>
      <t-menu-item value="/home">首页</t-menu-item>
      <t-menu-item value="/about">关于</t-menu-item>
      <template #operations> </template>
    </t-head-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 为了解决页面刷新，hash路由没变，但是组件刷新导致默认的currentPath总是刷新成初始值（/home）的问题，导致
// 我路由还是之前的路径（about），激活样式却变成了初始导航那里（/home）
const lastPath = localStorage.getItem('lastPath')
const currentPath = ref('')
if (!lastPath) {
  currentPath.value = '/home'
} else {
  currentPath.value = lastPath
}

const changeHandler = (active: Event) => {
  router.push(`${active}`)
  localStorage.setItem('lastPath', `${active}`)
  console.log('????')
}
</script>

<style scoped lang="scss">
.headerContainer {
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  height: 100px;
  width: 100%;
  z-index: 999;
  padding: 5px 40px;
  box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.2);
  .t-head-menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
h1 {
  color: #ef4136;
}
img {
  height: 80px;
  width: 61px;
}
</style>
