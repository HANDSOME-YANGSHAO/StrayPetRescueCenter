<template>
  <div class="comment-container">
    <div class="comment-add">
      <h2>评论</h2>
      <CommentAdd />
    </div>
    <div class="comment-list">
      <h2>所有评论</h2>
      <CommentItem v-for="n in 6" :key="n" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CommentAdd from './comment-add/index.vue'
import CommentItem from './comment-item/index.vue'
import { inject, onMounted } from 'vue'

const articleId = inject('articleId')
onMounted(() => {
  console.log('根据文章id去请求该文章的评论列表', articleId)
})
</script>

<style scoped lang="scss">
.comment-container {
  padding: 10px;
  // background-color: ;
}
</style>
