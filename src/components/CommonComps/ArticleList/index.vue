<template>
  <div class="articleList-container">
    <ArticleCard v-for="item in fakeData" :key="item.title" :articleItem="item" />
    <div class="center">
      <el-pagination
        v-model:currentPage="pagination.pageNum"
        v-model:page-size="pagination.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="pagination.total"
        @current-change="handleCurrentChange"
      />
    </div>
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
    title: '猫咪雪豹受伤恢复情况',
    publishTime: '2022.5.7 15:40',
    content: `
      老校门的雪豹前段时间和其他猫猫打架受伤，救助中心的同学发现后第一时间将其送往医院救治。救治过程中剃掉了脖子部位的毛发。近期我们将雪豹接回校园，脖子上的伤口因为正在恢复结痂，所以会看起来很恐怖，很多同学也因此很担心雪豹的状况并前来询问
      小助手在此感谢各位同学的关心雪豹现在正在逐渐恢复，大家不用太担心啦，欢迎大家多多投喂，也希望雪豹早日恢复健康
    `,
    hitsNum: 0,
    replyNum: 0,
    thumbsUpNum: 0,
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
