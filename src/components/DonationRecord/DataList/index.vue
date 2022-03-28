<template>
  <div class="list-container">
    <div class="list-header">
      <span class="icon">|</span>
      <span class="text">{{ `爱心善款去向` }}</span>
    </div>
    <el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="支出记录" name="pay">
        <el-collapse v-model="activeCollapseName" accordion>
          <el-collapse-item
            v-for="(item, index) in payList"
            :key="`${item.title}+${index}`"
            :name="index"
          >
            <template #title>
              <h3>{{ item.title + `: ￥${item.pay}` }}</h3>
            </template>
            <div class="time">{{ item.time }}</div>
            <div class="describe">{{ item.describe }}</div>
            <div class="imgList">
              <img
                v-for="(imgSrc, imgIndex) in item.imgList"
                :src="imgSrc"
                :key="`${imgSrc}+${imgIndex}`"
                @click="enlargeImg(imgSrc)"
              />
            </div>
            <el-dialog v-model="imgDialogVisible">
              <img w-full :src="dialogImageUrl" />
            </el-dialog>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="收入记录" name="income">
        <el-collapse v-model="activeCollapseName" accordion>
          <el-collapse-item
            v-for="(item, index) in incomeList"
            :key="`${item.title}+${index}`"
            :name="index"
          >
            <template #title>
              <h3>{{ item.title + `: ￥${item.income}` }}</h3>
            </template>
            <div class="time">{{ item.time }}</div>
            <div class="describe">{{ item.describe }}</div>
            <div class="imgList">
              <img
                v-for="(imgSrc, imgIndex) in item.imgList"
                :src="imgSrc"
                :key="`${imgSrc}+${imgIndex}`"
                @click="enlargeImg(imgSrc)"
              />
            </div>
            <el-dialog v-model="imgDialogVisible">
              <img w-full :src="dialogImageUrl" />
            </el-dialog>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <!-- 分页 -->
      <el-pagination
        v-model:currentPage="pagination.pageNum"
        v-model:page-size="pagination.pageSize"
        layout="total, prev, pager, next"
        :total="pagination.total"
        @current-change="handleClick"
      />
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'

/* 列表数据 */
const payList: Ref<INFO.PayRecord[]> = ref({} as INFO.PayRecord[])
const incomeList: Ref<INFO.IncomeRecord[]> = ref({} as INFO.IncomeRecord[])
const pagination: Ref<INFO.pagination> = ref({
  pageNum: 1,
  pageSize: 6,
  total: 0
})

/* 切换记录列表 */
const activeTabName = ref('pay')
const handleClick = () => {
  if (activeTabName.value === 'pay') {
    console.log('请求分页支出数据')
    payList.value = [
      {
        time: '2022.3.28 15:16',
        title: '买狗粮',
        pay: 15,
        describe: '买了一袋狗粮',
        imgList: [
          'https://img2.baidu.com/it/u=3583890265,375656539&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F40%2F12%2F59271dfbbeba3_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651041441&t=b29107e82988904cce3846d0725e6df5'
        ]
      },
      {
        time: '2022.3.28 13:14',
        title: '绝育',
        pay: 459,
        describe: '给大白绝育',
        imgList: [
          'https://img0.baidu.com/it/u=181829638,2962969400&fm=253&fmt=auto&app=120&f=JPEG?w=482&h=653'
        ]
      },
      {
        time: '2022.3.28 12.00',
        title: '疫苗',
        pay: 80,
        describe: '给大橘打疫苗',
        imgList: [
          'https://img0.baidu.com/it/u=1233300700,2731781477&fm=253&fmt=auto&app=138&f=JPEG?w=806&h=500'
        ]
      },
      {
        time: '2022.3.28 9:00',
        title: '乌龟之家',
        pay: 60,
        describe: '给乌龟买水箱',
        imgList: [
          'https://img0.baidu.com/it/u=3664041946,1681648059&fm=253&fmt=auto&app=120&f=JPEG?w=780&h=1040'
        ]
      },
      {
        time: '2022.3.28 8:00',
        title: '猫房',
        pay: 47,
        describe: '买猫房',
        imgList: [
          'https://img2.baidu.com/it/u=4251281575,2155226436&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
        ]
      },
      {
        time: '2022.3.27 14:17',
        title: '猫零食',
        pay: 180,
        describe: '买了一袋猫零食',
        imgList: [
          'https://img1.baidu.com/it/u=1506876392,1767446541&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ]
      }
    ]
  } else if (activeTabName.value === 'income') {
    console.log('请求分页收入数据')
    incomeList.value = [
      {
        time: '2022.3.28 12.00',
        title: '六期期捐款',
        income: 20,
        describe: '李老三今天捐赠了20元,太帅了',
        imgList: [
          'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image'
        ]
      },
      {
        time: '2022.3.27 12.00',
        title: '五期捐款',
        income: 100,
        describe: '李老三今天捐赠了100元',
        imgList: [
          'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image'
        ]
      },
      {
        time: '2022.3.26 12.00',
        title: '四期捐款',
        income: 150,
        describe: '李老三和谢忠豪今天捐赠了150元',
        imgList: [
          'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image',
          'https://img1.baidu.com/it/u=2383704592,2932869303&fm=253&fmt=auto&app=138&f=JPG?w=750&h=500'
        ]
      },
      {
        time: '2022.3.25 12.00',
        title: '三期捐款',
        income: 300,
        describe: '匿名的几位善良大哥总共捐献300元',
        imgList: [
          'https://img2.baidu.com/it/u=560978551,2178538401&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
        ]
      },
      {
        time: '2022.3.24 12.00',
        title: '二期捐款',
        income: 100,
        describe: '李老三今天捐赠了100元',
        imgList: [
          'https://p26-passport.byteacctimg.com/img/user-avatar/4b9b94b97a7a735e87facbea7cacdcbc~300x300.image'
        ]
      },
      {
        time: '2022.3.23 12.00',
        title: '一期捐款',
        income: 500,
        describe: '学生会爱心捐献500元',
        imgList: [
          'https://img1.baidu.com/it/u=1668078592,1615329346&fm=253&fmt=auto&app=138&f=JPG?w=750&h=500'
        ]
      }
    ]
  }
}

/* 收入/支出记录默认激活的手风琴项 */
const activeCollapseName = ref(0)

/* 图片放大对话框 */
const imgDialogVisible = ref(false)
const dialogImageUrl = ref('')
const enlargeImg = (imgSrc: string) => {
  dialogImageUrl.value = imgSrc
  imgDialogVisible.value = true
}

/* 爱心善款总计 */
const sum: Ref<number[]> = ref([]) // 假数据

onMounted(() => {
  handleClick()
  console.log('发送请求获取爱心善款累计收入和支出')
  sum.value = [1170, 841]
})
</script>

<style scoped lang="scss">
.el-pagination {
  margin-top: 30px;
}
.list-header {
  line-height: 100px;
  font-size: 25px;
  color: #ff6620;
  .text {
    margin-left: 15px;
  }
}
.time {
  font-weight: bold;
}
.imgList {
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  img {
    cursor: pointer;
    width: 73px;
    height: 73px;
    border-radius: 5px;
    margin-right: 10px;
  }
}
.el-dialog {
  img {
    width: 100%;
  }
}
</style>
