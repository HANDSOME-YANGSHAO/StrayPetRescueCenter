<template>
  <div class="petDeatil-container">
    <el-button @click="onCancel">取消</el-button>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps({
  petDetailDialogVisible: { // 父对话框的显示属性的双向绑定
    type: Boolean,
    default: false
  },
  petData: { // 宠物详情数据
    type: Object,
    default: {} as INFO.PetData
  }
})
const emit = defineEmits(['update:petDetailDialogVisible'])
const _petDetailDialogVisible = useVModel(props, 'petDetailDialogVisible', emit)

const onCancel = () => {
  console.log(props.petData.value)
  _petDetailDialogVisible.value = false
}
</script>

<style scoped lang="scss">
</style>
