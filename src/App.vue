<template>
  <button @click="linkTo('/')">首页</button>
  <button @click="linkTo('/about')">关于</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const linkTo = (path: string) => {
  router.push(`${path}`)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
