<template>
  <div class="navbar">
    <div
      v-for="(item,index) in navItem"
      :key="item.path"
      :class="activeIndex === index ? `nav-item active` : `nav-item` "
      @click="changeNav(item.path, index)"
    >{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouterStore } from '../../../store/router'
import { useRouter } from 'vue-router'

const navItem = ref([
  { title: '目录', path: '/ExchangeCenter/Category' },
  { title: '所有文章', path: '/ExchangeCenter/AllArticle' },
  { title: '我的', path: '/ExchangeCenter/MyArticle' }
])
const activeIndex = ref(null as number)

const router = useRouter()
const routerStore = useRouterStore()
const changeNav = (path: string, index: number) => {
  activeIndex.value = index
  router.push(path)
  routerStore.getAciveIndex()
}
</script>

<style scoped lang="scss">
.active {
   color: var(--ourTextColor);
}
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .nav-item {
    width: 1rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--ourTextColor);
    }
  }
}
</style>
