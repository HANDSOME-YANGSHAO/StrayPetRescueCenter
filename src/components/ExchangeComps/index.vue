<template>
  <div class="exchangeCenter-container">
    <div class="nav">
      <NavArea />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <div style="border: 1px solid #ccc">
    <Toolbar
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultContent="defaultContent"
      :defaultHtml="defaultHtml"
      :mode="mode"
      style="height: 500px; overflow-y: hidden;"
    />
    <!-- 注意: defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一 -->
  </div>
</template>

<script setup lang="ts">
import NavArea from './NavArea/index.vue'

import { onBeforeUnmount, ref } from 'vue'
import { Editor, Toolbar, getEditor, removeEditor } from '@wangeditor/editor-for-vue'

const editorId = `w-e-${Math.random().toString().slice(-5)}` // 【注意】编辑器 id ，要全局唯一

// defaultContent (JSON 格式) 和 defaultHtml (HTML 格式) ，二选一
const defaultHtml = '一行文字'
const defaultContent = [
  { type: 'paragraph', children: [{ text: '一行文字' }] }
]

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(editorId)
  if (editor == null) return

  editor.destroy()
  removeEditor(editorId)
})

const mode = 'default'
</script>

<style scoped lang="scss">
.exchangeCenter-container {
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem 15%;
}
.test {
  width: 80%;
  height: 600px;
}
</style>
<style src="@wangeditor/editor/dist/css/style.css"></style>
