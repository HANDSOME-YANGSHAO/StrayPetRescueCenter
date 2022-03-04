<template>
  <el-form ref="formRef" :model="formData" :rules="formRules" label-width="120px">
    <el-form-item label="用户名" name="account">
      <el-input :prefix-icon="User" v-model="formData.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" name="password">
      <el-input :prefix-icon="Lock" v-model="formData.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-button @click="handleLogin" color="#f87f1f" style="color: white">登录</el-button>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import formRules from './formRules'
import { User, Lock } from '@element-plus/icons-vue'

const INITIAL_DATA = {
  account: '',
  password: ''
}
const formData = ref({ ...INITIAL_DATA })
const reloadHeader = inject('reloadHeader')
const handleLogin = () => {
  localStorage.setItem('userInfo', JSON.stringify({ userName: '帅气洋少', avatar: 'https://img2.baidu.com/it/u=3406964446,4038366459&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800' }))
  reloadHeader()
}

</script>

<style scoped lang="scss">
.login-container {
  width: 600px;
}
</style>
