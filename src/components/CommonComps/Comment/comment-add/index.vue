<template>
  <div class="commentAdd">
    <img :src="avatar" class="avatar" />
    <div class="comment-editor">
      <el-input
        v-model="commentContent"
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="点击输入评论(Enter换行)"
        :disabled="!isLogged"
      />
      <div class="addComment">
        <el-button @click="addComment" color="#f7811c" style="color: white" :disabled="!isLogged">发表评论</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const commentContent = ref('')
const userInfoStore = useUserInfoStore()
const { isLogged, userInfo } = storeToRefs(userInfoStore)
const articleId = inject('articleId')

const avatar = computed(() => {
  return userInfo.value ? userInfo.value.avatar : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F52708%2F%2FsBuoyFCYxwYuQORKgby1y40Zg8nYzc2IvMeucblk.jpeg&refer=http%3A%2F%2Fimg.91huoke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648908845&t=36a1ac79ec1d3c2403516a2460c43396'
})

const addComment = () => {
  console.log(`根据文章id:${articleId}发表对应文章的评论`)
}
</script>

<style scoped lang="scss">
.commentAdd {
  margin-top: 30px;
  width: 100%;
  display: flex;
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .comment-editor {
    width: calc(100% - 45px - 10px);
    .el-input {
      min-height: 64px;
      font-size: 14px;
      line-height: 22px;
    }
  }
  .addComment {
    margin-top: 10px;
    position: relative;
    height: 32px;
    .el-button {
      position: absolute;
      right: 0px;
    }
  }
}
</style>
