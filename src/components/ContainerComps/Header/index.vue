<template>
  <div class="headerContainer">
    <t-head-menu v-model="currentPath" theme="light" @change="changeHandler">
      <template #logo>
        <div class="logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
      </template>
      <t-menu-item
        v-for="item in menuList"
        :key="item.path"
        :value="item.path"
      >{{ item.meta.title }}</t-menu-item>
      <div class="operations">
        <img class="avatar" src="./img/avatar.jpeg"/>
        <span class="userName">{{  }}</span>
      </div>
    </t-head-menu>
  </div>
</template>

<script setup lang="ts">
import { json } from 'node:stream/consumers'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRouterStore } from '../../../store/router'

const router = useRouter()
const routerStore = useRouterStore()
const menuList = routerStore.routes.filter((item) => {
  return item.name !== 'Index'
})
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
}

const name = ref('')
const userInfo = localStorage.getItem('userInfo')
name.value = userInfo !== '' ? '用户姓名' : '游客'

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
    .operations {
      .avatar {
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
    }
  }
}
img {
  height: 60px;
  width: 280px;
}
</style>
