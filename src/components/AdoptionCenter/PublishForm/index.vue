<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    label-width="150px"
    :rules="publishRules"
    :hide-required-asterisk="true"
  >
    <el-form-item label="宠物名" prop="petName">
      <el-input v-model="formData.petName"></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="contactInfo">
      <el-input v-model="formData.contactInfo"></el-input>
    </el-form-item>
    <el-form-item label="宠物年龄" prop="age">
      <el-input v-model="formData.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="formData.sex">
        <el-option
          v-for="item in sexOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="类别">
      <el-select v-model="formData.petCategory">
        <el-option
          v-for="item in petCategoryOptionsPublish"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="性格">
      <el-select v-model="formData.petCategory">
        <el-option
          v-for="item in characterOptionsPublish"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="狂犬疫苗">
      <el-select v-model="formData.vaccinated">
        <el-option
          v-for="item in vaccinatedOptionsPublish"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="宠物介绍">
      <el-input
        v-model="formData.petIntroduction"
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="这里可以写上宠物的详情信息喔"
      />
    </el-form-item>
    <el-form-item label="图片">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :before-upload="addFlieList"
      >
        <el-icon>
          <Plus />
        </el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img style="width: 100%" :src="dialogImageUrl" />
      </el-dialog>
    </el-form-item>
    <el-form-item>
      <div class="buttonGroup">
        <el-popconfirm
          title="确认发布领养信息？"
          @confirm="onPublish(ruleFormRef)"
          hide-icon
          confirm-button-text="是"
          cancel-button-text="否"
        >
          <template #reference>
            <el-button type="primary" round>提交</el-button>
          </template>
        </el-popconfirm>
        <el-button @click="onCancel" round>取消</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { publishRules } from './formRules'
import type { ElForm, UploadFile, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useVModel } from '@vueuse/core'
import {
  petCategoryOptionsPublish,
  vaccinatedOptionsPublish,
  characterOptionsPublish,
  sexOptions
} from '../common'

/* 父对话框的显示属性，和子表单双向绑定 */
const props = defineProps({
  publishDialogVisible: Boolean
})
const emit = defineEmits(['update:publishDialogVisible'])
const _publishDialogVisible = useVModel(props, 'publishDialogVisible', emit)

/* 表单引用 */
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>(null)

/* 表单数据 */
const formData = reactive({
  petName: '',
  age: '',
  contactInfo: '',
  petIntroduction: '',
  sex: '0',
  petCategory: '0',
  character: '0',
  vaccinated: '0'
})

/* 表单事件 */
const resetForm = () => {
  ruleFormRef.value.resetFields()
}
const onPublish = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        type: 'success',
        showClose: true,
        message: '发布成功'
      })
      resetForm()
      _publishDialogVisible.value = false
    } else {
      console.log('error submit!', fields)
    }
  })
}
const onCancel = () => {
  resetForm()
  _publishDialogVisible.value = false
}

/* 上传图片 */
const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F15%2F20200515234807_nzwhd.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620574&t=092650918a11ad665d3df44c4a0b66e4'
  },
  {
    name: 'food.jpeg',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1909%2F1_174217_f7de79ed750c14f.png&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620635&t=ff3a198ee51306e01c775b6f8bd1c50f'
  }
])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleRemove = (file: UploadFile, fileList: UploadFile[]) => {
  console.log(file, fileList)
}
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
const addFlieList = (file) => {
  console.log(file)
}
</script>

<style scoped lang="scss">
.el-input {
  width: 40%;
}
.buttonGroup {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 40px 10px 0;
  .el-button {
    width: 30%;
  }
}
</style>
