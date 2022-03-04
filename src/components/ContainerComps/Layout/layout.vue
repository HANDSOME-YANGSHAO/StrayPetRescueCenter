<template>
  <div class="laylout">
    <Header v-if="refresh" />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../header/index.vue'
import Content from '../Content/index.vue'
import Footer from '../Footer/index.vue'
import { ref, nextTick, provide } from 'vue'

const refresh = ref(true)
const reloadHeader = () => {
  refresh.value = false
  nextTick(() => {
    refresh.value = true
  })
}
provide('reloadHeader', reloadHeader)
</script>
