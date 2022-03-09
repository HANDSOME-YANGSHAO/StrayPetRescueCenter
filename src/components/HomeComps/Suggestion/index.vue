<template>
  <div class="suggestion-container">
    <div class="suggestion-header">
      <div class="theme">建议投递</div>
      <span class="guide">欢迎大家发表对平台的各种意见，我们会虚心接受共同进步哒</span>
    </div>
    <div class="suggestion-content">
      <el-input
        v-model="userFeedBack"
        :autosize="{ minRows: 5, maxRows: 10 }"
        type="textarea"
        :placeholder="placeholder"
        :disabled="!isLogged"
      ></el-input>
      <div class="tip"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)
const userFeedBack = ref('')
const placeholder = computed(() => {
  return isLogged.value ? '收集大家意见，集思广益，共同进步~' : '请先登录！'
})
</script>

<style scoped lang="scss">
.suggestion-container {
  margin: 200px;
  .suggestion-header {
    text-align: center;
    vertical-align: center;
    .theme {
      color: #ef4136;
      font-size: 35px;
      font-weight: bolder;
      line-height: 60px;
    }
    .guide {
      font: 14px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .suggestion-content {
    margin-top: 50px;
  }
}
</style>
