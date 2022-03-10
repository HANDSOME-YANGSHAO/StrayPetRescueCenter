<template>
  <div class="laylout">
    <Header v-if="refreshHeader" />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../header/index.vue'
import Content from '../Content/index.vue'
import Footer from '../Footer/index.vue'
import { ref, nextTick, provide } from 'vue'

const refreshHeader = ref(true)
const reloadHeader = () => {
  // 这里加个延迟，为了让数据刷新完毕，包括登录状态的改变、路由钩子执行完毕之后拿到最新的状态和数据再
  refreshHeader.value = false
  nextTick(() => {
    refreshHeader.value = true
  })
}
// 子组件中刷新header
provide('reloadHeader', reloadHeader)
</script>
