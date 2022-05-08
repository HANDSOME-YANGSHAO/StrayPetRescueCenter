<template>
  <el-card shadow="hover" class="aticle-card" @click="articlDetail">
    <div class="describe">
      <div class="describe-header">
        <div class="article-title">{{ articleData.title }}</div>
        <div class="article-time">{{ articleData.time }}</div>
      </div>
      <div class="aritcle-outline">{{ articleData.content }}</div>
    </div>
    <div class="badge-group">
      <Badge :number="articleData.hitsNum">
        <template #icon>
          <img src="../../../assets/svg/clickNum.svg" />
        </template>
      </Badge>
      <Badge :number="articleData.replyNum">
        <template #icon>
          <img src="../../../assets/svg/reply.svg" />
        </template>
      </Badge>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRouterStore } from '@/store/router'
import Badge from '../Badge/index.vue'

const props = defineProps({
  articleItem: {
    type: Object,
    default: () => {
      return {
        id: '9999',
        title: '标题',
        publishTime: '文章创建时间',
        content: '文章内容',
        hitsNum: 15,
        replyNum: 10,
        authorName: '作者',
        avatar: '',
        thumbsUpNum: 1
      } as INFO.ArticleData
    }
  }
})
const articleData = ref({
  ...props.articleItem
})

const router = useRouter()
const route = useRoute()
const routerStore = useRouterStore()
/* 携带文章id，进入文章的详情页面 */
const articlDetail = () => {
  if (route.path === '/Home') {
    router.push('/ExchangeCenter/AllArticle')
    console.log('进入全部文章')
  } else {
    router.push({
      path: '/ExchangeCenter/ArticleDetail',
      query: {
        id: articleData.value.id
      }
    })
    console.log('携带文章id进入文章详情页面')
  }
  routerStore.getAciveIndex()
}
</script>

<style scoped lang="scss">
.aticle-card {
  border: 0.5px solid;
  margin: 10px 0;
  cursor: pointer;
  &:hover .article-title {
    color: var(--ourTextColor);
  }
  .describe {
    margin-top: 0.2rem;
    .article-title {
      font: 15px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
    }
    .article-time {
      margin: 0.1rem 0;
      font: 15px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
    .aritcle-outline {
      width: 100%;
      height: 60px;
      font: 12px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 55, 0.8);
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
.badge-group {
  display: flex;
  justify-content: right;
}
</style>
