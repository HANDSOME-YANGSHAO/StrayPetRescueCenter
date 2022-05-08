<template>
  <div class="lovePro-container">
    <div class="lovePro-title">{{ '爱心项目' }}</div>
    <div class="lovePro-list">
      <div class="center" v-for="(item, index) in proData" :key="item.imgSrc + index">
        <el-card shadow="hover">
          <div class="lovePro-flex">
            <img :src="item.imgSrc" />
            <div class="describe">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.proDesc }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const proData = [
  {
    imgSrc: './donationImg/lovePro2.webp',
    title: '救助受伤流浪动物',
    proDesc: '帮助受伤流浪宠物，组织志愿者共同帮助受伤的流浪动物去医院做手术、打针吃药等。在大家的帮助下，我们已经救助了十多只受伤狗狗和猫咪。'
  },
  {
    imgSrc: './donationImg/lovePro3.jpeg',
    title: '购买流浪动物物资',
    proDesc: '在流浪宠物平常居住的点，我们会定时投喂食物和水源以及自己买材料做的宠物住所（狗房、猫房），大家平常的善款也有部分用于购买公共的狗粮猫粮等。'
  },
  {
    imgSrc: './donationImg/lovePro4.jpg',
    title: '帮助流浪动物接种疫苗',
    proDesc: '帮助宠物们做绝育手术，接种疫苗。'
  },
  {
    imgSrc: './donationImg/lovePro5.jpg',
    title: '援助孤立无援的动物宝宝',
    proDesc: '救助刚刚出生却无法生存的宠物，我们会在领养平台发相关的领养信息。'
  }
]
</script>

<style scoped lang="scss">
.lovePro-container {
  background-color: #fafafa;
  .lovePro-title {
    height: 100px;
    font-size: 30px;
    color: #ff6620;
    text-align: center;
    line-height: 100px;
  }
  .lovePro-list {
    margin: 30px 1rem;
    .center {
      margin-top: 30px;
      .el-card {
        width: 90%;
        .lovePro-flex {
          width: 100%;
          display: flex;
          justify-content: space-between;
          img {
            width: 20%;
          }
          .describe {
            width: 70%;
            .title {
              line-height: 100px;
              font-size: 25px;
              font-weight: bold;
              color: #000000;
            }
            .content {
              font-size: 14px;
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>
