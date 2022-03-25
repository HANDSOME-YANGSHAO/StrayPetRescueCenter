<template>
  <el-card>
    <h3>投喂主子: {{ props.feedRecordData.petName }}</h3>
    <div class="content">
      <div class="content-item">
        <div class="content-item-label">地点:</div>
        <div class="content-item-info">{{ props.feedRecordData.feedPlace }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-label">备注:</div>
        <div class="content-item-info">{{ props.feedRecordData.remarks }}</div>
      </div>
      <div class="content-item imgList-container">
        <div class="content-item-label">图片:</div>
        <div class="content-item-info imgList">
          <img
            v-for="(item, index) in props.feedRecordData.imgList"
            :key="`${item.imgSrc} + ${index}`"
            :src="item"
            @click="enlargeImg(item)"
          />
        </div>
        <el-dialog v-model="enlargeImgDialogVisible" title="图片预览">
          <img :src="enlargeImgSrc" />
        </el-dialog>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* 投喂记录详细数据 */
const props = defineProps({
  feedRecordData: {
    type: Object,
    default: () => {
      return {} as INFO.feedRecordData
    }
  }
})

/* 图片预览对话框 */
const enlargeImgDialogVisible = ref(false)
const enlargeImgSrc = ref('')
const enlargeImg = (imgSrc: string) => {
  enlargeImgSrc.value = imgSrc
  enlargeImgDialogVisible.value = true
}

</script>

<style scoped lang="scss">
.el-card {
  width: 100%;
  .content {
    width: 100%;
  }
}

.imgList-container {
  margin-top: 10px;
}
.content-item {
  width: 100%;
  line-height: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: #303133;

  display: flex;
  justify-content: flex-start;
  .content-item-label {
    text-align: right;
    width: 40px;
    margin-right: 10px;
  }
  .imgList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    img {
      cursor: pointer;
      width: 146px;
      height: 146px;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
}
.el-dialog {
  img {
    width: 100%;
  }
}
</style>
