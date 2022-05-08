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
    petName: '大姨',
    age: '1',
    contactInfo: '99499212@qq.com',
    petIntroduction: '大橘猫大姨，目前年龄大概1岁出头，虽然叫着大姨大姨，但人家可是可爱的女孩纸！目前已经通过重邮猫狗救助中心的帮助，进行了猫瘟、狂犬病疫苗的注射，相对比较健康，性格也是比较成熟稳重，比较乖巧的那一类猫咪，有意的朋友可以联系qq99499212',
    sex: '2',
    petCategory: '0',
    character: '0',
    vaccinated: '0',
    adoptionRecord: '1',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20110%2F27%2Fw1080h1347%2F20211209%2Ff72b-69d9c87e8006f66ab01ff9bf2458847b.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654522804&t=f24fec45ca973c7ee6f738f856769dff',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20111%2F26%2Fw1080h1346%2F20220116%2F3582-a5e532620883d7c359e0d48607ae233a.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654522804&t=ebf104d45752c0c385dafcb31a336c70',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20111%2F29%2Fw1080h1349%2F20220116%2F0bb4-d7bdd910bd7604c926ff4796101b055b.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654522804&t=36c6331e8ac99213c77165b86e791ba9'
      // 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F15%2F20200515234807_nzwhd.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620574&t=092650918a11ad665d3df44c4a0b66e4',
      // 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_1909%2F1_174217_f7de79ed750c14f.png&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650620635&t=ff3a198ee51306e01c775b6f8bd1c50f'
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
