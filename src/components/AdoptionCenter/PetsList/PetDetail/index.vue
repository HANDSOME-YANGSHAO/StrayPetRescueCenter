<template>
  <div class="petDeatil-container">
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '领养状态:' }}
      </div>
      <div class="petDeatil-item-content light">
        {{ adoptionRecord }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '姓名:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ props.petData.petName }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '年龄:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ props.petData.age }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '联系方式:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ props.petData.contactInfo }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '性别:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ props.petData.sex === '0' ? '其它' : props.petData.sex === '1' ? '小王子' : '小公举' }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '宠物类别:' }}
      </div>
      <div class="petDeatil-item-content">
        {{
          props.petData.petCategory === '0'
            ? '犬科'
            : props.petData.petCategory === '1'
            ? '猫科'
            : '其它'
        }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '性格:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ character }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '狂犬疫苗:' }}
      </div>
      <div class="petDeatil-item-content">
        {{ props.petData.vaccinated === '0' ? '未接种' : '已接种' }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '宠物介绍:' }}
      </div>
      <div class="petDeatil-item-content">
        {{
          props.petData.petIntroduction
        }}
      </div>
    </div>
    <div class="petDeatil-item">
      <div class="petDeatil-item-label">
        {{ '宠物图片:' }}
      </div>
      <div class="petDeatil-item-content imgList">
        <img
          v-for="(item, index) in props.petData.imgList"
          :src="item"
          :key="`${item}-${index}`"
          @click="enlargeImg(item)"
        />
      </div>
      <el-dialog v-model="imgDialogVisible">
        <img w-full :src="dialogImageUrl" />
      </el-dialog>
    </div>
    <div class="submitButtonGroup">
      <el-popconfirm
        title="确认申请领养？"
        @confirm="onApplyAdoption"
        hide-icon
        confirm-button-text="是"
        cancel-button-text="否"
      >
        <template #reference>
          <el-button type="primary" :disabled="applyStatus">{{ isLogged ? '申请领养' : '请先登陆' }}</el-button>
        </template>
      </el-popconfirm>
      <el-button @click="onCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

const props = defineProps({
  petDetailDialogVisible: {
    // 父对话框的显示属性的双向绑定
    type: Boolean,
    default: false
  },
  petData: {
    // 宠物详情数据
    type: Object,
    default: {} as INFO.PetData
  }
})
const emit = defineEmits(['update:petDetailDialogVisible'])
const _petDetailDialogVisible = useVModel(props, 'petDetailDialogVisible', emit)

const character = computed(() => {
  const result = ref('')
  switch (props.petData.character) {
    case '0':
      result.value = '慢热'
      break
    case '1':
      result.value = '活泼'
      break
    case '2':
      result.value = '佛系'
      break
    case '3':
      result.value = '高冷'
      break
    case '4':
      result.value = '温和'
      break
  }
  return result.value
})
const adoptionRecord = computed(() => {
  return props.petData.adoptionRecord === '0'
    ? '已领养'
    : props.petData.adoptionRecord === '1'
      ? '未领养'
      : '领养申请中'
})
const applyStatus = computed(() => {
  if (isLogged.value) {
    return !(props.petData.adoptionRecord === '1')
  }
  return true
})

const imgDialogVisible = ref(false)
const dialogImageUrl = ref('')
const enlargeImg = (imgSrc: string) => {
  if (imgSrc) {
    dialogImageUrl.value = imgSrc
  }
  imgDialogVisible.value = true
}

const onApplyAdoption = () => {
  console.log(
    `根据宠物id:${props.petData.id}发送请求去更新状态，同时让重新请求一遍领养宠物列表数据`
  )
  ElMessage({
    type: 'success',
    showClose: true,
    message: '申请成功，等待审核'
  })
  _petDetailDialogVisible.value = false
}
const onCancel = () => {
  _petDetailDialogVisible.value = false
}
</script>

<style scoped lang="scss">
.petDeatil-item {
  display: flex;
  justify-content: space-around;
  .petDeatil-item-label {
    text-align: right;
    width: 100px;
    line-height: 32px;
    font-size: 15px;
    color: #606266;
  }
  .petDeatil-item-content {
    width: 70%;
    font-size: 14px;
    line-height: 32px;
  }
  .imgList {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    img {
      cursor: pointer;
      width: 146px;
      height: 146px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
}
.submitButtonGroup {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  .el-button {
    width: 30%;
  }
}
.el-dialog {
  img {
    width: 100%;
  }
}
.light {
  font-weight: bold;
}
</style>
