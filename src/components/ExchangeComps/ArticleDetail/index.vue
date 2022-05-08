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
      <img v-if="!thumbsActive" src="../../../assets/svg/thumb.svg" />
      <img v-else src="../../../assets/svg/thumb_active.svg" />
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
  title: '猫咪雪豹受伤情况恢复',
  avatar:
    'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image',
  authorName: '重邮猫咪小助手',
  publishTime: '2022年5月7日 14:22',
  hitsNum: 50,
  replyNum: 3,
  thumbsUpNum: 2,
  content: '<p><img src="https://img2.baidu.com/it/u=3971627457,1973217076&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=402" alt="aa" data-href="https://img2.baidu.com/it/u=3971627457,1973217076&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=402" style=""/></p><p><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 15px; font-family: punctuation, PingFangSC-Regular, &quot;Microsoft Yahei&quot;, &quot;sans-serif&quot;;">【喵喵解释】老校门的雪豹前段时间和其他猫猫打架受伤，救助中心的同学发现后第一时间将其送往医院救治。救治过程中剃掉了脖子部位的毛发。近期我们将雪豹接回校园，脖子上的伤口因为正在恢复结痂，所以会看起来很恐怖，很多同学也因此很担心雪豹的状况并前来询问</span><img src="http://qzonestyle.gtimg.cn/qzone/em/e10307.gif" alt="" data-href="" style=""/><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 15px; font-family: punctuation, PingFangSC-Regular, &quot;Microsoft Yahei&quot;, &quot;sans-serif&quot;;">小助手在此感谢各位同学的关心</span><img src="http://qzonestyle.gtimg.cn/qzone/em/e163.png" alt="" data-href="" style=""/><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: 15px; font-family: punctuation, PingFangSC-Regular, &quot;Microsoft Yahei&quot;, &quot;sans-serif&quot;;">雪豹现在正在逐渐恢复，大家不用太担心啦，欢迎大家多多投喂，也希望雪豹早日恢复健康</span></p>'
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
