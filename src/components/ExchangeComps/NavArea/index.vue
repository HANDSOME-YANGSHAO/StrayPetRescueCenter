<template>
  <div class="navbar">
    <div class="nav-left">
      <div
        v-for="(item, index) in navItem"
        :key="item.path"
        :class="activeIndex === index ? `nav-item active` : `nav-item`"
        @click="changeNav(item.path, index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="nav-right" @click="goPublishArticle">
      <img src="../../../assets/svg/点击发布文章.svg" />
      <span>发布文章</span>
    </div>
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
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

/* 初始 */
const navItem = ref([
  { title: '所有文章', path: '/ExchangeCenter/AllArticle' },
  { title: '我的', path: '/ExchangeCenter/MyArticle' }
])
const activeIndex = ref(null as number)

/* 公共 */
const router = useRouter()
const route = useRoute()
const routerStore = useRouterStore()
const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

/* 导航菜单 */
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

// 记录激活的二级路由信息，刷新的时候保存激活的导航效果
if (
  route.path !== '/ExchangeCenter/ArticleDetail' &&
  route.path !== '/ExchangeCenter/PublishArticle'
) {
  console.log(route.path)
  const articleNavIndex = Number(localStorage.getItem('articleNavIndex')) // 第一次取到null，Number(null) --> 0 默认指向所有文章
  changeNav(navItem.value[articleNavIndex].path, articleNavIndex)
}

/* 发布文章 */
const goPublishArticle = () => {
  if (!isLogged.value) {
    ElMessage({
      message: '请先登录！',
      type: 'warning'
    })
    return
  }
  router.push('/ExchangeCenter/PublishArticle')
  routerStore.getAciveIndex()
}
</script>

<style scoped lang="scss">
.active {
  color: white;
}
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: rgba(247, 129, 28);
  width: 100%;
  align-items: center;
  .nav-left {
    display: flex;
    justify-content: flex-start;
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
  .nav-right {
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
      font-size: 15px;
      color: white;
    }
  }
}

.nav-images {
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
