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
import emitter from '@/utils/eventbus'

const refreshHeader = ref(true)
const reloadHeader = () => {
  refreshHeader.value = false
  nextTick(() => {
    refreshHeader.value = true
  })
}
// 子组件中刷新header
provide('reloadHeader', reloadHeader)
// 全局跨组件刷新header
emitter.on('reloadHeader', () => {
  reloadHeader()
})

</script>
