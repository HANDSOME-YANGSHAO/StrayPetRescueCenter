<template>
  <div class="Introduction-container">
    <div class="Introduction-card">
      <div class="Introduction-card-text">
        <div class="theme">流浪宠物领养平台</div>
        <span class="guide">愿所有流浪动物都能找到自己的家</span>
        <div class="guide describe">
          我们宠物公司于2006年涉足宠物行业，历经十多年的业务发展，当下公司已成为一家专注于宠物行业的企业，
          公司目前已发展成国内七个分公司的销售服务基地，已常态化为超过5000余家宠物行业线上线下零售商提供商
          品及周边服务。主要的服务范围包括：宠物售卖、宠物美容、宠物医疗、宠物用品等。
        </div>
        <el-button color="#EF4136" style="color: white" @click="readMore">查看更多</el-button>
      </div>
      <img class="Introduction-card-image1" src="../../../assets/img/流浪宠物救助.webp" />
    </div>
    <div class="Introduction-card">
      <img class="Introduction-card-image2" src="../../../assets/img/用心真诚照顾.jpeg" />
      <div class="Introduction-card-text">
        <div class="theme">用心真诚照顾</div>
        <span class="guide">给宠物温暖的关爱</span>
        <div class="guide describe">
          公司秉承宠物安全优先的理念，坚信无论消费能力的高与低，顾客总是希望以更优惠的价格购买
          到自己真正需要的商品。因此，我们将经营方式融入到自身的品牌理念中，不断提高岗位专业技
          能，致力于将员工与顾客都变成品牌核心价值的传播者。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const reloadHeader = inject('reloadHeader') as any
const router = useRouter()
const readMore = () => {
  router.push('/AdoptionCenter')
  reloadHeader()
}
</script>

<style scoped lang="scss">
.Introduction-container {
  margin-top: 2rem;
  width: 100%;
  .Introduction-card {
    width: 100%;
    display: flex;
    .Introduction-card-text {
      box-sizing: border-box;
      padding: 0.8rem 2rem;
      width: 50%;
      height: 100%;
      .describe {
        margin-top: 0.5rem;
      }
      .el-button {
        width: 1.5rem;
        height: 0.5rem;
        margin-top: 0.4rem;
      }
    }
    .Introduction-card-image1 {
      width: 50%;
      height: 6.61144rem;
    }
    .Introduction-card-image2 {
      width: 50%;
      height: 5.99726rem;
    }
  }
}
</style>
