<template>
  <div class="suggestion-container">
    <div class="suggestion-header">
      <div class="theme">建议投递</div>
      <span class="guide">欢迎大家发表对平台的各种意见，我们会虚心接受共同进步哒</span>
    </div>
    <div class="suggestion-content">
      <el-input
        v-model="userFeedBack"
        :autosize="{ minRows: 10, maxRows: 15 }"
        type="textarea"
        :placeholder="placeholder"
        :disabled="!isLogged"
      ></el-input>
      <div class="tip">
        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          :title="title"
          :hide-icon="true"
        >
          <template #reference>
            <img src="../../../assets/svg/send.svg" />
          </template>
        </el-popconfirm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const userFeedBack = ref('')

const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

const placeholder = computed(() => {
  return isLogged.value ? '收集大家意见，集思广益，共同进步~' : '请先登录！'
})
const title = computed(() => {
  return isLogged.value ? '是否投递建议~' : '请先登录！'
})
</script>

<style scoped lang="scss">
.suggestion-container {
  margin: 200px;
  .suggestion-header {
    text-align: center;
    vertical-align: center;
  }
  .suggestion-content {
    margin-top: 50px;
    .tip {
      margin-top: 20px;
      height: 0.5rem;
      width: 100%;
      position: relative;
      img {
        width: 0.5rem;
        height: 0.5rem;
        cursor: pointer;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
