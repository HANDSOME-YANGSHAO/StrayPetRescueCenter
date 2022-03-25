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
    id: '120',
    petName: '超级柴犬',
    age: '2.5',
    contactInfo: '2451228780@qq.com',
    petIntroduction: '超级柴犬超级厉害，家人们，快来领养，这小家伙是超级柴犬',
    sex: '1',
    petCategory: '0',
    character: '0',
    vaccinated: '0',
    adoptionRecord: '1',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F15%2F20200515234807_nzwhd.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620574&t=092650918a11ad665d3df44c4a0b66e4',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1909%2F1_174217_f7de79ed750c14f.png&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620635&t=ff3a198ee51306e01c775b6f8bd1c50f'
    ]
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
