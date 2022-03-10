<template>
  <Layout/>
</template>

<script setup lang="ts">
import Layout from './components/ContainerComps/Layout/layout.vue'
import { useUserInfoStore } from './store/userInfo'
import { useRouterStore } from './store/router'

/* 根据localStorage 缓存 初始化 userInfo 公共状态库 */
const userInfoStore = useUserInfoStore()
userInfoStore.getUserInfo()

/* 根据localStorage 缓存 初始化 router 公共的状态库 */
const routerStore = useRouterStore()
routerStore.getAciveIndex()
</script>
