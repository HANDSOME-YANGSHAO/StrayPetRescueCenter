<template>
  <el-card class="pet-card" :body-style="{ padding: '10px' }">
    <img :src="petDescribe.coverSrc" />
    <div class="introduction">{{ petDescribe.introduction }}</div>
  </el-card>
</template>

<script setup lang="ts">
defineProps({
  petDescribe: Object,
  default: () => {
    return {
      id: '120',
      coverSrc:
        'https://img1.baidu.com/it/u=3107176190,1328093718&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
      introduction:
        '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
    }
  }
})
</script>

<style scoped lang="scss">
.pet-card {
  margin-top: 30px;
  width: 30%;
  cursor: pointer;
  img {
    width: 100%;
  }
  .introduction {
    margin-top: 10px;
    width: 100%;
    height: 60px;
    font: 12px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
    color: rgba(51, 51, 55, 0.8);
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
