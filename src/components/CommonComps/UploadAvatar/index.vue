<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type {
  UploadFile,
  ElUploadProgressEvent,
  ElFile
} from 'element-plus/es/components/upload/src/upload.type'

const imageUrl = ref('')
const handleAvatarSuccess = (res: ElUploadProgressEvent, file: UploadFile) => {
  imageUrl.value = URL.createObjectURL(file.raw)
}
const beforeAvatarUpload = (file: ElFile) => {
  console.log(file)
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    ElMessage.error('头像格式必须是jpeg格式！')
  }
  if (!isLt2M) {
    ElMessage.error('头像大小不能超过2MB！')
  }
  return isJPG && isLt2M
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  text-align: center;
}
.avatar {
  width: 60px;
  height: 60px;
  display: block;
}
</style>
