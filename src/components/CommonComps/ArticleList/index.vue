<template>
  <div class="articleList-container">
    <ArticleCard v-for="item in fakeData" :key="item.title" :articleItem="item" />
    <el-pagination
      v-model:currentPage="pagination.pageNum"
      v-model:page-size="pagination.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="pagination.total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/CommonComps/ArticleCard/index.vue'
import { Ref, ref } from 'vue'

const props = defineProps({
  articleListType: Number // 1: 所有文章  2：我的文章
})

console.log(props.articleListType)

const pagination: Ref<INFO.pagination> = ref({
  pageNum: 1,
  pageSize: 5,
  total: 0
})
const handleCurrentChange = () => {
  console.log('现在的页数改变', pagination.value)
}
const fakeData: Ref<INFO.ArticleData[]> = ref([
  {
    id: '9999',
    title: '柴犬',
    publishTime: '2022.3.16',
    content: `
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
    `,
    hitsNum: 10,
    replyNum: 10,
    thumbsUpNum: 10,
    authorName: '李老三',
    avatar: ''
  },
  {
    id: '1111',
    title: '柴犬',
    publishTime: '2022.3.16',
    content: `
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
    `,
    hitsNum: 10,
    replyNum: 10,
    thumbsUpNum: 10,
    authorName: '李老三',
    avatar: ''
  },
  {
    id: '2222',
    title: '柴犬',
    publishTime: '2022.3.16',
    content: `
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
    `,
    hitsNum: 10,
    replyNum: 10,
    thumbsUpNum: 10,
    authorName: '李老三',
    avatar: ''
  },
  {
    id: '3333',
    title: '柴犬',
    publishTime: '2022.3.16',
    content: `
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
    `,
    hitsNum: 10,
    replyNum: 10,
    thumbsUpNum: 10,
    authorName: '李老三',
    avatar: ''
  },
  {
    id: '4444',
    title: '柴犬',
    publishTime: '2022.3.16',
    content: `
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
    `,
    hitsNum: 10,
    replyNum: 10,
    thumbsUpNum: 10,
    authorName: '李老三',
    avatar: ''
  }
])

</script>

<style scoped lang="scss">
</style>
