<template>
  <el-drawer v-model="_drawerVisible" direction="ttb" size="70%" :title="title">
    <template #default>
      <div class="guide">
        <span v-if="_formStatus === 0" @click="changeForm">还未注册？点击注册</span>
        <span v-if="_formStatus === 1" @click="changeForm">返回登陆界面</span>
      </div>
      <CommonForm ref="commonForm" :form-status="props.formStatus" />
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="confirm">{{ title }}</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import CommonForm from '@/components/CommonComps/Form/index.vue'

const props = defineProps({
  drawerVisible: Boolean,
  formStatus: Number
})
const emit = defineEmits(['update:drawerVisible', 'update:formStatus'])
const _drawerVisible = useVModel(props, 'drawerVisible', emit)
const _formStatus = useVModel(props, 'formStatus', emit)

const title = computed(() => {
  return _formStatus.value === 0 ? '登陆' : _formStatus.value === 1 ? '注册' : '修改个人信息'
})

const changeForm = () => {
  if (!_formStatus.value) {
    _formStatus.value = 1
  } else {
    _formStatus.value = 0
  }
}

const commonForm = ref(null)
const resetForm = () => {
  commonForm.value.resetForm()
}
const confirm = () => {
  commonForm.value.submit()
  _drawerVisible.value = false
}
</script>

<style scoped lang="scss">
.guide {
  padding: 20px 80px;
  display: flex;
  span {
    font-size: 10px;
    color: #f7811c;
    cursor: pointer;
  }
}
</style>
