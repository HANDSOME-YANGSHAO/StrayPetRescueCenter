<template>
  <div class="articleDetail-container">
    <div class="title">
      <h1>{{ articleData.title }}</h1>
    </div>
  </div>
  <div class="info">
    <img class="avatar" :src="articleData.avatar" />
    <div class="other">
      <div class="authorName">{{ articleData.authorName }}</div>
      <div class="publishTime">
        {{ articleData.publishTime + ` - 阅读量${articleData.hitsNum}` }}
      </div>
    </div>
    <el-button class="follow">+ 关注</el-button>
  </div>
  <div class="content">{{ articleData.content }}</div>
  <div class="thumbs">
    <span>给这篇文章点赞~</span>
    <div class="right" @click="thumbsUp">
      <img v-if="!thumbsActive" src="../../../assets/svg/点赞.svg" />
      <img v-else src="../../../assets/svg/点赞成功.svg" />
      <span>{{ articleData.thumbsUpNum }}</span>
    </div>
  </div>
  <Comment />
</template>

<script setup lang="ts">
import { ref, Ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import Comment from '@/components/CommonComps/Comment/index.vue'

const route = useRoute()
const articleId = route.query.id
// 文章详情页面中，可以给评论使用
provide('articleId', articleId)
console.log(articleId, '文章id')

/* 文章数据的假数据 */
const articleData: Ref<INFO.ArticleData> = ref({
  id: '9999',
  title: '如何培养好柴犬的生活习惯？',
  avatar:
    'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image',
  authorName: '李老三',
  publishTime: '2022年3月17日 14:22',
  hitsNum: 305,
  replyNum: 10,
  thumbsUpNum: 200,
  content: `    我们在养柴犬的时候都希望它始终能够乖巧听话，呼之则来招之则去的。但是柴犬天性顽皮好动，要想达到顺从的目的，就得需要主人平时多加训练了。那么，平时该如何训练柴犬呢？这几个方法是关键，赶紧来看看吧。
    一、规定地点训练
    将柴犬带回家之后经常随地大小便，家里被搞得脏兮兮的？这是因为你没有给它养成定点的好习惯。要在柴犬很小的时候就要开始训练它，先把它关在一个狭小的笼子中，当它有想要大小便的需求时，迅速把它放在指定位置，如果能够做到就奖励，做不到就重复，直到学会为止。
    二、护食训练
    对于有养柴犬经验的人来说，如果不做护食训练很容易在吃食的时候抓伤主人。所以新手主人们一定要给柴犬做护食训练，首先将食物放在自己的手中，让它舔食，建立信任感。其次，在尝试着抚摸它，让它放下戒备，大胆吃食。
    三、训练柴犬坐下
    在训练柴犬的时候，主人需要蹲在柴犬的右侧，并且发出口令，把左手放在柴犬的背上，用手轻轻的按住柴犬的臀部和后腿，手动让他坐下。
    主人们需要注意，训练柴犬的最佳时间是4~6个月大的时候，训练它最好先从基本的坐、握手之类的学起，服从性训练好之后就可以考虑下一步了，还有训练的时候不能超十五分钟哦。 `
})

const thumbsActive = ref(false)
const thumbsUp = () => {
  thumbsActive.value = !thumbsActive.value
  thumbsActive.value ? articleData.value.thumbsUpNum++ : articleData.value.thumbsUpNum--
}
</script>

<style scoped lang="scss">
.articleDetail-container {
  margin-top: 50px;
}
.info {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .other {
    width: 90%;
    .authorName {
      font-size: 17px;
      font-weight: 500;
      color: #515767;
    }
    .publishTime {
      font: 15px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
    .follow {
      font-size: 14px;
    }
  }
}
.content {
  margin-top: 50px;
  font-size: 16px;
  line-height: 30px;
}
.thumbs {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: rgba(51, 51, 51, 0.5);
    font: 12px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
  }
  .right {
    width: 0.8rem;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    span {
      cursor: pointer;
      color: rgba(51, 51, 51, 0.5);
      font: 12px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
    }
  }
}
</style>
