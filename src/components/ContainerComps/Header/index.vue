<template>
  <t-head-menu v-model="menu1Value" theme="light" @change="changeHandler" height="160px">
    <template #logo>
      <img width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
    </template>
    <t-menu-item value="/home">首页</t-menu-item>
    <t-menu-item value="/about">关于</t-menu-item>
    <template #operations>
      <a href="javascript:;">
        <t-icon class="t-menu__operations-icon" name="search" />
      </a>
      <a href="javascript:;">
        <t-icon class="t-menu__operations-icon" name="mail" />
      </a>
      <a href="javascript:;">
        <t-icon class="t-menu__operations-icon" name="user" />
      </a>
      <a href="javascript:;">
        <t-icon class="t-menu__operations-icon" name="ellipsis" />
      </a>
    </template>
  </t-head-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menu1Value = ref('home')

const changeHandler = (active) => {
  router.push(`${active}`)
}
</script>

<style scoped>
</style>
