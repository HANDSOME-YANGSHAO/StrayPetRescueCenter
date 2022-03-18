<template>
  <div class="navbar">
    <div
      v-for="(item, index) in navItem"
      :key="item.path"
      :class="activeIndex === index ? `nav-item active` : `nav-item`"
      @click="changeNav(item.path, index)"
    >{{ item.title }}</div>
  </div>
  <div class="nav-images">
    <img src="../../../assets/img/交流中心.jpg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouterStore } from '../../../store/router'
import { useUserInfoStore } from '../../../store/userInfo'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const navItem = ref([
  { title: '所有文章', path: '/ExchangeCenter/AllArticle' },
  { title: '我的', path: '/ExchangeCenter/MyArticle' }
])

const activeIndex = ref(null as number)

const router = useRouter()
const routerStore = useRouterStore()
const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)
const changeNav = (path: string, index: number) => {
  if (path === '/ExchangeCenter/MyArticle' && !isLogged.value) {
    ElMessage({
      message: '请先登录！',
      type: 'warning'
    })
    return
  }

  activeIndex.value = index
  localStorage.setItem('articleNavIndex', index + '')
  router.push(path)
  routerStore.getAciveIndex()
}

/* 记录激活的二级路由信息，刷新的时候保存激活的导航效果 */
const articleNavIndex = Number(localStorage.getItem('articleNavIndex')) // 第一次取到null，Number(null) --> 0 默认指向所有文章
changeNav(navItem.value[articleNavIndex].path, articleNavIndex)

</script>

<style scoped lang="scss">
.active {
  color: white;
}
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(247, 129, 28);
  width: 69.55vw;
  .nav-item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
}

.nav-images {
  width: 69.55vw;
  height: 16.43192vw;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
