<template>
  <div class="petList-container">
    <PetCard v-for="item in petList" :key="item.id" :pet-describe="item" @click="onClick(item.id)" />
  </div>
  <el-dialog v-model="petDetailDialogVisible" title="宠物详情">
    <PetDetail v-model:petDetailDialogVisible="petDetailDialogVisible" :petData="fakeData"/>
  </el-dialog>
</template>

<script setup lang="ts">
import PetCard from './PetCard/index.vue'
import PetDetail from './PetDetail/index.vue'
import { ref, Ref } from 'vue'

defineProps({
  petList: Object,
  default: {}
})

const petDetailDialogVisible = ref(false)
const fakeData: Ref<INFO.PetData> = ref({} as INFO.PetData)

const onClick = (id: string) => {
  console.log(id, '根据宠物的id去发送请求获得宠物详情信息')
  fakeData.value = {
    petName: '超级柴犬',
    age: '约两岁半',
    contactInfo: '2451228780@qq.com',
    petIntroduction: '超级柴犬超级厉害，家人们，快来领养，这小家伙是超级柴犬',
    sex: '1',
    petCategory: '0',
    character: '0',
    vaccinated: '0',
    adoptionRecord: '1'
  }
  petDetailDialogVisible.value = true
}
</script>

<style scoped lang="scss">
.petList-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
