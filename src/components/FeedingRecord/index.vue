<template>
  <div class="feedingRecord-container">
    <!-- 查询 -->
    <div class="feedingRecord-query">
      <el-form :inline="true" :model="formData">
        <el-form-item label="宠物姓名">
          <el-input v-model="formData.petName" placeholder="宠物名称" />
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="formData.feedPlace" placeholder="地点" />
        </el-form-item>
        <el-form-item label="投喂日期">
          <el-date-picker
            value-format="x"
            v-model="formData.feedDate"
            type="date"
            placeholder="选择投喂日期"
          />
        </el-form-item>
        <el-form-item label="投喂时间段">
          <el-select v-model="formData.feedTime" placeholder="投喂时间">
            <el-option label="上午" value="morning" />
            <el-option label="下午" value="afternoon" />
            <el-option label="晚上" value="night" />
            <el-option label="全部" value="all" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onQuery">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-tooltip :content="
            isLogged ? '点击发布投喂记录' : '点击发布投喂记录(请先登录!)'" placement="top" effect="light">
            <el-button
              type="primary"
              @click="onPublishFeedRecord"
              :icon="Edit"
              :disabled="!isLogged"
              circle
            />
          </el-tooltip>
        </el-form-item>
      </el-form>

      <!-- 投喂记录列表 -->
      <div class="feedRecordCard-list">
        <el-timeline>
          <el-timeline-item
            v-for="item in feedRecordList"
            :key="item.id"
            :timestamp="item.datetime"
            placement="top"
          >
            <FeedRecordCard :feedRecordData="item" />
          </el-timeline-item>
        </el-timeline>
      </div>

      <!-- 分页 -->
      <el-pagination
        v-model:currentPage="formData.pagination.pageNum"
        v-model:page-size="formData.pagination.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="formData.pagination.total"
        @current-change="onQuery"
      />

      <!-- 发布投喂记录的drawer -->
      <el-drawer v-model="publishFeedRecordDrawerVisible" direction="rtl" size="60%">
        <template #title>
          <h2>发布投喂记录</h2>
        </template>
        <template #default>
          <PublishForm v-model:publishFeedRecordDrawerVisible="publishFeedRecordDrawerVisible" />
        </template>
      </el-drawer>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import { ref, Ref } from 'vue'
import PublishForm from './PublishForm/index.vue'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'
import FeedRecordCard from './FeedRecordCard/index.vue'

/* 登录状态 */
const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

/* 查询表单 */
const formData = ref({
  petName: '',
  feedPlace: '',
  feedDate: '',
  feedTime: 'all',
  pagination: {
    pageNum: 1,
    pageSize: 4,
    total: 8
  } as INFO.pagination
})

/* 发布投喂记录抽屉 */
const publishFeedRecordDrawerVisible = ref(false)
const onPublishFeedRecord = () => {
  publishFeedRecordDrawerVisible.value = true
}

/* 列表数据 */
// 页面渲染发送请求获取列表数据
const feedRecordList: Ref<INFO.feedRecordData[]> = ref([
  {
    id: '666',
    petName: '大白',
    feedPlace: '兴业苑3舍',
    datetime: '2022-3-27 12:15',
    remarks: '今日中午左右喂了3根猫条和一点矿泉水，大家可以等到晚上再投喂~',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-127acdba22a3f0229e8790acb2f82638_r.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794047&t=292acbd60545831f83854cba93a9d538',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp49914714.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794047&t=ae38f2da39fd9c0fdc8cb9864bf164d7',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F7ErabOtj2EfOhcnYc6q1X4BUxCsuAVlh0zg1xXQP1AUyj1557455030891.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794047&t=7bbebad4792ed2e0c5beaf42983325e6'
    ]
  },
  {
    id: '111',
    petName: '小白',
    feedPlace: '樱花篮球场',
    datetime: '2022-3-27 9:00',
    remarks: '喂了一罐猫罐头',
    imgList: [
      'https://img1.baidu.com/it/u=714235722,3545683628&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F12051422216%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650793679&t=50d06c8edf2b7ecd5926762527bbe564',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F12051422226%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650793657&t=9fb464180ca398d915b391139d4441f1'
    ]
  },
  {
    id: '222',
    petName: '超级柴犬',
    feedPlace: '知行苑7舍',
    datetime: '2022-3-27 12:15',
    remarks: '给它吃了两根火腿肠',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6bd2cebe85053edb6ceb7cee775a26a4d4acf1d214b38-6bp2PD_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794220&t=459c99b7d07ed6288fa0e2ee3c3ab07a',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp.qpic.cn%2Fdnfbbspic%2F0%2Fdnfbbs_dnfbbs_dnf_gamebbs_qq_com_forum_202109_02_193126njpzak4wkx14ktwt.jpg%2F0&refer=http%3A%2F%2Fp.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794220&t=e8568f6dcc4ab0de07ff1bd8cd3216ca',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb4116fd43cf39b082e25520a056df77170db57d723189-DXmwrt_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794220&t=1dffbd9d78d84d462b4cf5e94667ee82'
    ]
  },
  {
    id: '333',
    petName: '乌龟之王',
    feedPlace: '八十万旁边的人工湖',
    datetime: '2022-3-27 12:15',
    remarks: '喂了饲料',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ypiq.cn%2Fwp-content%2Fuploads%2F2021%2F05%2F1-20013120362a10-1.jpg&refer=http%3A%2F%2Fwww.ypiq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794373&t=3b8b7e40042eb94df21ba0fe7eda3fd1',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0827%252F215e60c6j00qyi3fc001uc000hs00a0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794316&t=fb7effdd94fd42a99b75e02822e4933d',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dyrck.cn%2Fd%2Ffile%2Fbigpic%2F211213%2F13%2F20211210093420516.jpg&refer=http%3A%2F%2Fwww.dyrck.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650794316&t=ae58117acd6eade304ea5d7bc1d4613c'
    ]
  }
] as INFO.feedRecordData[])
const onQuery = () => {
  console.log('携带表单数据去查询投喂记录列表')
}
</script>

<style scoped lang="scss">
.feedingRecord-container {
  padding: 30px 1rem;
}
.feedRecordCard-list {
  margin: 30px 0;
}
</style>
