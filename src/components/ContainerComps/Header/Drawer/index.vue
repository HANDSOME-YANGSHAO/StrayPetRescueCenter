<template>
  <el-drawer v-model="_drawerVisible" direction="ttb" size="70%" :title="title">
    <template #default>
      <div>dsadsadsadsadsa</div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancel">cancel</el-button>
        <el-button type="primary" @click="submit">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useVModel } from '@vueuse/core'

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
const cancel = () => {
  _drawerVisible.value = false
}
const refreshHeader = inject('reloadHeader') as any
const submit = () => {
  // 模拟登陆成功，获得数据
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      userName: '帅气洋少',
      avatar:
        'https://img2.baidu.com/it/u=3406964446,4038366459&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    })
  )
  refreshHeader()
  _drawerVisible.value = false
}
</script>

<style scoped></style>
