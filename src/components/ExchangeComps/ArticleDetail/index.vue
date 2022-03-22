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
      <div class="publishTime">{{ articleData.publishTime + ` - 阅读量${articleData.hitsNum}` }}</div>
    </div>
    <el-button class="follow">+ 关注</el-button>
  </div>
  <div class="content">
    <Editor
      class="content-editor"
      v-if="isEditorShow"
      :editorId="editorId"
      :defaultConfig="{
        readOnly: true
      }"
      :defaultHtml="defaultHtml"
      mode="simple"
      style="width: 100%"
    />
  </div>
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
import { ref, Ref, provide, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import Comment from '@/components/CommonComps/Comment/index.vue'
import { Editor, getEditor, removeEditor } from '@wangeditor/editor-for-vue'

const route = useRoute()
const articleId = route.query.id
/*  文章详情页面中，可以给评论使用 */
provide('articleId', articleId)
console.log(articleId, '文章id')

/* 富文本编辑器初始化 */
const editorId = `w-e-${Math.random().toString().slice(-4)}`
const defaultHtml = ref('<p>loading...</p>')
const isEditorShow = ref(false)

/* 文章数据的假数据（模拟发送请求拿到数据） */
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
  content: ' <p><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F30%2F20180830160031_xelzy.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650522872&t=d68f7254bf7d1d5a63ecc74fefe69ba4" alt="修勾儿" data-href="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F30%2F20180830160031_xelzy.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650522872&t=d68f7254bf7d1d5a63ecc74fefe69ba4" style="width: 347.00px;height: 347.00px;"/></p><p>&nbsp;&nbsp;&nbsp;&nbsp;我们在养柴犬的时候都希望它始终能够乖巧听话，呼之则来招之则去的。但是柴犬天性顽皮好动，要想达到顺从的目的，就得需要主人平时多加训练了。那么，平时该如何训练柴犬呢？这几个方法是关键，赶紧来看看吧。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、规定地点训练</p><p> &nbsp; &nbsp;将柴犬带回家之后经常随地大小便，家里被搞得脏兮兮的？这是因为你没有给它养成定点的好习惯。要在柴犬很小的时候就要开始训练它，先把它关在一个狭小的笼子中，当它有想要大小便的需求时，迅速把它放在指定位置，如果能够做到就奖励，做不到就重复，直到学会为止。</p><p> &nbsp; &nbsp;二、护食训练</p><p> &nbsp; &nbsp;对于有养柴犬经验的人来说，如果不做护食训练很容易在吃食的时候抓伤主人。所以新手主人们一定要给柴犬做护食训练，首先将食物放在自己的手中，让它舔食，建立信任感。其次，在尝试着抚摸它，让它放下戒备，大胆吃食。</p><p> &nbsp; &nbsp;三、训练柴犬坐下</p><p> &nbsp; &nbsp;在训练柴犬的时候，主人需要蹲在柴犬的右侧，并且发出口令，把左手放在柴犬的背上，用手轻轻的按住柴犬的臀部和后腿，手动让他坐下。</p><p> &nbsp; &nbsp;主人们需要注意，训练柴犬的最佳时间是4~6个月大的时候，训练它最好先从基本的坐、握手之类的学起，服从性训练好之后就可以考虑下一步了，还有训练的时候不能超十五分钟哦。</p> '
})
// 富文本解析器异步获取数据
defaultHtml.value = articleData.value.content
isEditorShow.value = true

const thumbsActive = ref(false)
const thumbsUp = () => {
  thumbsActive.value = !thumbsActive.value
  thumbsActive.value ? articleData.value.thumbsUpNum++ : articleData.value.thumbsUpNum--
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(editorId)
  if (editor == null) return
  editor.destroy()
  removeEditor(editorId)
})
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
