<template>
  <div class="communication-container">
    <div class="communication-titile">
      <div class="theme">传递爱心</div>
      <span class="guide">爱宠人士互相交流养宠物的经验</span>
    </div>
    <div class="aricle-guide">
      <div class="left">
        <el-card shadow="hover" class="aticle-card" @click="goArticleDetail">
          <img src="../../../assets/img/模拟文章封面.jpeg" />
          <div class="describe">
            <div class="article-title">{{ '柴犬的年龄划分' }}</div>
            <div class="article-time">{{ '2022年 9月10号' }}</div>
            <div class="aritcle-outline">
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              三.若犬一组：为七个月以上，一岁未满的雄、雌；
              四.若犬二组：为一岁以上，一年六个月未满的雄、雌；
              五.壮犬组：为一岁六个月以上，两岁六个月未满的雄、雌；
              六.成犬组：为两岁六个月以上的雄、雌。
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              三.若犬一组：为七个月以上，一岁未满的雄、雌；
              四.若犬二组：为一岁以上，一年六个月未满的雄、雌；
              五.壮犬组：为一岁六个月以上，两岁六个月未满的雄、雌；
              六.成犬组：为两岁六个月以上的雄、雌。
            </div>
          </div>
        </el-card>
      </div>
      <div class="right">
        <el-card shadow="hover" class="aticle-card" v-for="n in 4" :key="n">
          <div class="describe">
            <div class="describe-header">
              <div class="article-title">{{ '柴犬' }}</div>
              <div class="article-time">{{ ' 2022年 9月10号' }}</div>
            </div>
            <div class="aritcle-outline">
              《日本柴犬年龄区分的规定》
              一.幼稚犬组:为四个月未满的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
              二.幼犬组：为四个月以上的雄、雌；
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const goArticleDetail = () => {
  console.log('携带文章id跳转到交流中心')
}

</script>

<style scoped lang="scss">
.el-card {
  border: none;
  cursor: pointer;
}
.describe-header {
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 20px;
}
.communication-container {
  margin-top: 100px;
  padding: 0 200px;
  .communication-titile {
    margin: 50px 0px;
    .theme {
      color: #ef4136;
      font-size: 35px;
      font-weight: bolder;
      line-height: 60px;
    }
    .guide {
      font: 14px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
      color: rgba(51, 51, 51, 0.5);
    }
  }
  .aricle-guide {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left,
    .right {
      width: 45%;
      min-width: 700px;
      .aticle-card {
        &:hover .article-title {
          color: var(--ourTextColor);
        }
        .describe {
          margin-top: 20px;
          .article-time {
            margin: 10px 0px;
            font: 15px 微软雅黑, arial, Hiragino Sans GB, 宋体, sans-serif;
            color: rgba(51, 51, 51, 0.5);
          }
          .aritcle-outline {
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
      }
    }
  }
}
.right>.el-card {
  margin-bottom: 5px;
}
</style>
