<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    label-width="150px"
    :rules="commonRules"
    :hide-required-asterisk="true"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-if="loginItemVisible" v-model="formData.userName" :prefix-icon="User"></el-input>
      <el-input v-else v-model="formData.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-if="loginItemVisible"
        type="password"
        v-model="formData.password"
        :prefix-icon="Lock"
      ></el-input>
      <el-input v-else type="password" v-model="formData.password"></el-input>
    </el-form-item>
    <el-form-item label="宠物经验" v-if="registerItemVisible || setUserInfoItemVisible" prop="keptPets">
      <el-switch v-model="formData.keptPets" />
    </el-form-item>
    <el-form-item label="真实姓名" v-if="registerItemVisible || setUserInfoItemVisible" prop="realName">
      <el-input v-model="formData.realName"></el-input>
    </el-form-item>
    <el-form-item label="年龄" v-if="registerItemVisible || setUserInfoItemVisible" prop="age">
      <el-input v-model="formData.age" type="number"></el-input>
    </el-form-item>
    <el-form-item label="性别" v-if="registerItemVisible || setUserInfoItemVisible" prop="sex">
      <el-radio v-model="formData.sex" label="男" size="large" border>男生</el-radio>
      <el-radio v-model="formData.sex" label="女" size="large" border>女生</el-radio>
    </el-form-item>
    <el-form-item label="手机号" v-if="registerItemVisible || setUserInfoItemVisible" prop="phoneNum">
      <el-input v-model="formData.phoneNum" :prefix-icon="Phone"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" v-if="registerItemVisible || setUserInfoItemVisible" prop="email">
      <el-input v-model="formData.email" :prefix-icon="CopyDocument"></el-input>
    </el-form-item>
    <el-form-item label="地址" v-if="registerItemVisible || setUserInfoItemVisible" prop="address">
      <el-input v-model="formData.address" :prefix-icon="Location"></el-input>
    </el-form-item>
    <el-form-item label="个人简介" v-if="registerItemVisible || setUserInfoItemVisible">
      <el-input
        v-model="formData.introduction"
        :rows="3"
        type="textarea"
        placeholder="欢迎来到本救助系统！这里可以写下自己的个人简介喔~"
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { User, Lock, Phone, CopyDocument, Location } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import { commonRules } from './formRules'

/* 表单状态 */
const props = defineProps({
  formStatus: Number // 0:login  1:register  2:setUserInfo
})
const loginItemVisible = computed(() => {
  return props.formStatus === 0
})
const registerItemVisible = computed(() => {
  return props.formStatus === 1
})
const setUserInfoItemVisible = computed(() => {
  return props.formStatus === 2
})

/* 表单引用 */
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()

/* 表单数据 */
const formData = reactive({
  userName: '',
  password: '',
  keptPets: true,
  realName: '',
  age: '',
  sex: '男',
  phoneNum: '',
  email: '',
  address: '',
  introduction: ''
})

/* 表单事件 */
const onLogin = () => {
  ElMessage({
    type: 'success',
    showClose: true,
    message: '登录成功'
  })
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      userName: '帅气洋少',
      avatar:
        'https://img2.baidu.com/it/u=3406964446,4038366459&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    })
  )
}
const onRegister = () => {
  ElMessage({
    type: 'success',
    showClose: true,
    message: '注册成功'
  })
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      userName: '帅气洋少',
      avatar:
        'https://img2.baidu.com/it/u=3406964446,4038366459&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    })
  )
}
const onSetUserInfo = () => {
  ElMessage({
    type: 'success',
    showClose: true,
    message: '设置成功'
  })
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      userName: '帅气洋少',
      avatar:
        'https://img2.baidu.com/it/u=3406964446,4038366459&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    })
  )
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  console.log('清空校验')
  formEl.resetFields()
}

/* 父组件调用 */
const submit = () => {
  switch (props.formStatus) {
    case 0:
      onLogin()
      break
    case 1:
      onRegister()
      break
    case 2:
      onSetUserInfo()
      break
  }
  resetForm(ruleFormRef.value)
}
defineExpose({
  submit,
  resetForm
})
</script>

<style scoped lang="scss">
.el-input {
  width: 30%;
  min-width: 500px;
}
</style>
