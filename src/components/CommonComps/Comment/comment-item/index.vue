<template>
  <div class="commentItem">
    <div class="comment-detail">
      <img :src="commentData.avatar" class="avatar" />
      <div class="other">
        <div class="pickName">{{ commentData.pickName }}</div>
        <div class="content">{{ commentData.content }}</div>
      </div>
      <div class="publishTime">{{ commentData.publishTime }}</div>
    </div>
    <div class="badge-group">
      <Badge class="pointer" :number="commentData.thumbsUpNum" @click="thumbsUp">
        <template #icon>
          <img v-if="!thumbsActive" src="../../../../assets/svg/thumb.svg" />
          <img v-else src="../../../../assets/svg/thumb_active.svg" />
        </template>
      </Badge>
      <Badge class="pointer" :number="commentData.replyNum">
        <template #icon> <img src="../../../../assets/svg/reply_black.svg" /> </template
      ></Badge>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import Badge from '../../Badge/index.vue'
import { ref } from 'vue'

// 评论的假数据
const props = defineProps({
  commentItem: {
    type: Object,
    default: () => {
      return {
        avatar:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2Fe1b8508cly1gc6qj475ctj20u00tutan.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648908845&t=b225b3d3cecfb7c550bd7bcd4595ea77',
        pickName: '帅气洋少',
        publishTime: '2022年3月17日 14:22',
        replyNum: 0,
        thumbsUpNum: 2,
        content: '呜呜呜！希望咱们的雪豹小宝贝能够快快痊愈！'
      } as INFO.CommentData
    }
  }
})

const commentData = ref({
  ...props.commentItem
})

const thumbsActive = ref(false)
const thumbsUp = () => {
  thumbsActive.value = !thumbsActive.value
  // 发送请求让点赞数量加和减
  thumbsActive.value ? commentData.value.thumbsUpNum++ : commentData.value.thumbsUpNum--
}
</script>

<style scoped lang="scss">
.commentItem {
  margin-top: 30px;
}
.comment-detail {
  width: 100%;
  display: flex;
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .other {
    width: calc(100% - 45px - 130px - 10px);
    .pickName {
      font-size: 15px;
      font-weight: 500;
      color: #515767;
    }
    .content {
      margin-top: 10px;
      font: 15px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.8);
    }
  }
  .publishTime {
    width: 130px;
    font: 13px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
    color: #515767;
  }
}
.badge-group {
  display: flex;
   .pointer {
    cursor: pointer;
  }
}
.line {
  margin-top: 10px;
  width: 100%;
  border-bottom: 2px solid #E5E6EB;
}
</style>
