<template>
  <div class="articleTitle">
    <input
      v-model="title"
      style="border: none; outline: none; width: 100%; font-size:30px; font-weight:bold; height:50px; line-height:50px"
    />
  </div>
  <hr />
  <div class="articleEditor" style="border: 1px solid #ccc; width: 100%">
    <Toolbar
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultHtml="defaultHtml"
      :mode="mode"
      style="height: 500px;"
    />
    <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
  </div>
  <div class="articleSubmit">
    <el-button type="primary" @click="publishArticle">发布文章</el-button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { Editor, Toolbar, getEditor, removeEditor } from '@wangeditor/editor-for-vue'
import { IToolbarConfig } from '@wangeditor/editor'
import { ElMessage } from 'element-plus'

const editorId = `w-e-${Math.random().toString().slice(-5)}` // 【注意】编辑器 id ，要全局唯一

const toolbarConfig: Partial<IToolbarConfig> = {
  /* 工具栏配置 */
  toolbarKeys: [
    // 菜单 key
    'headerSelect',

    // 分割线
    '|',

    // 菜单 key
    'bold', 'italic', 'color', 'fontSize', 'uploadImage', 'insertImage',

    // 菜单组，包含多个菜单
    {
      key: 'group-more-style', // 必填，要以 group 开头
      title: '更多样式', // 必填
      iconSvg: '<svg>....</svg>', // 可选
      menuKeys: ['through', 'clearStyle'] // 下级菜单 key ，必填
    }
    // 继续配置其他菜单...
  ]
}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(editorId)
  if (editor == null) return
  editor.destroy()
  removeEditor(editorId)
})

const mode = 'simple'

/* 表单 */
const title = ref('请输入文章标题')
// defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
const defaultHtml = ''
const publishArticle = () => {
  const editor = getEditor(editorId)
  console.log(editor.getHtml(), title.value)
  if (!title.value) {
    ElMessage({
      type: 'warning',
      showClose: true,
      message: '文章标题不能够为空！'
    })
  } else if (editor.getHtml() === '<p><br></p>') {
    ElMessage({
      type: 'warning',
      showClose: true,
      message: '文章内容不能够为空！'
    })
  } else {
    console.log('表单校验，校验成功之后携带文章内容发送请求')
  }
}

</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped lang="scss">
.articleTitle {
  width: 100%;
  margin-top: 30px;
}
.articleEditor {
  width: 100%;
  margin-top: 30px;
}
.articleSubmit {
  margin-top: 30px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
