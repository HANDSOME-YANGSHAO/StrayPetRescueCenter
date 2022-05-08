<template>
  <img class="shop-cover" src="../../assets/img/shopHeader.jpg" />
  <div class="shop-content">
    <div class="title">
      <span class="text">{{ `周边` }}</span>
    </div>
    <el-card class="store" v-for="item in storeList" :key="item.storeName">
      <div class="info">
        <div class="overview">
          <div class="header">
            <span class="icon">|</span>
            <span class="text">{{ `商家图片概览` }}</span>
          </div>
          <el-carousel :interval="4000" trigger="click">
            <el-carousel-item v-for="src in item.imgList" :key="src">
              <img :src="src" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="contact">
          <div class="header">
            <span class="icon">|</span>
            <span class="text">{{ `商家基本信息` }}</span>
          </div>
          <div class="content">
            <div class="item">
              <div class="label">店铺名称:</div>
              <div class="value">{{ item.storeName }}</div>
            </div>
            <div class="item">
              <div class="label">联系邮箱:</div>
              <div class="value">{{ item.email }}</div>
            </div>
            <div class="item">
              <div class="label">商家地点:</div>
              <div class="value">{{ item.location }}</div>
            </div>
            <div class="item">
              <div class="label">工作时间:</div>
              <div class="value">{{ item.workTime }}</div>
            </div>
            <div class="item">
              <div class="label">联系热线:</div>
              <div class="value">{{ item.phoneNumber }}</div>
            </div>
            <div class="qrcode">
              <img :src="item.wxImg" />
              <div class="wx">微信号</div>
            </div>
          </div>
        </div>
        <div class="describe">
          <div class="header">
            <span class="icon">|</span>
            <span class="text">{{ `商家服务` }}</span>
          </div>
          <div class="body">
            {{ item.describe }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 静态数据
const storeList = reactive([
  {
    imgList: ['./homeImg/store1.jpeg', './homeImg/store2.jpeg'],
    storeName: 'XX宠物商店',
    email: 'xxxxxxxxxxx@qq.com',
    location: '重邮新校门出门右转直行大约800米处',
    workTime: '早上9点-晚上8点',
    phoneNumber: 'xxxxxxxxxx',
    wxImg: './homeImg/qrcode2.jpg',
    describe: `经营项目一般包括宠物用品超市、活体销售、宠物美容、宠物寄养、宠物医疗、宠物乐园、宠物摄影、待产养护。
      这边做绝育手术最近有相关优惠：5.15至5.20日，进店可享受7.5折优惠。`
  },
  {
    imgList: ['./homeImg/store3.jpeg', './homeImg/store4.jpeg'],
    storeName: 'XX宠物医院',
    email: 'xxxxxxx@qq.com',
    location: '重邮老校门门口，堕落街46号',
    workTime: '早上9点-晚上7点',
    phoneNumber: 'xxxxxxxxx',
    wxImg: './homeImg/qrcode1.png',
    describe: `犬猫骨折创伤手术、脊柱手术、微创绝育术、胃肠道肿瘤异物切除吻合术、胸腔及纵膈手术、泌尿系统手术、生殖系统手术、肿瘤切除加淋巴清扫术、牙科及口腔相关手术、耳道手术、眼科相关手术等。
    LED全反射双头无影灯、日本木村专用呼吸麻醉机、JNR5导联心电监护仪、ART进口高频电刀、进口动物专用手术吸引器、BLUESAO PRCL骨科全套手术系统、进口软组织外科手术套装、专业牙科工作台、ART牙科洁牙机等。`
  }
]) as any
</script>

<style scoped lang="scss">
.header {
  font-size: 20px;
  line-height: 60px;
  color: #ff6620;
  .text {
    margin-left: 15px;
  }
}
.shop-cover {
  width: 100%;
}
.shop-content {
  box-sizing: border-box;
  width: 100%;
  padding: 30px 1rem;
  background-color: #fafafa;

  .title {
    font-size: 30px;
    line-height: 100px;
    color: #ff6620;
    text-align: center;
  }

  .store {
    margin-top: 50px;
    width: 100%;
    background-color: white;
    .info {
      box-sizing: border-box;
      padding: 0px 40px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .overview {
        width: 30%;
        border-radius: 5%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5%;
        }
      }
      .contact {
        width: 20%;
        .content > .item {
          display: flex;
          line-height: 30px;
          color: #000000;
          font-size: 15px;
          .label {
            width: 70px;
            text-align: right;
          }
          .value {
            width: 150px;
            margin-left: 10px;
          }
        }
        .content > .qrcode {
          margin-top: 50px;
          width: 100px;
          img {
            width: 100px;
            height: 100px;
          }
          .wx {
            text-align: center;
          }
        }
      }
      .describe {
        width: 30%;
        line-height: 30px;
        color: #000000;
        font-size: 15px;
      }
    }
  }
}
</style>
