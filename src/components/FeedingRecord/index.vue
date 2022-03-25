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
          <el-button
            @click="onPublishFeedRecord"
            :disabled="!isLogged"
          >{{ isLogged ? '发布投喂记录' : '发布投喂记录(请先登录!)' }}</el-button>
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
      <el-drawer v-model="publishFeedRecordDrawerVisible" direction="rtl">
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
import { reactive, ref } from 'vue'
import PublishForm from './PublishForm/index.vue'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'
import FeedRecordCard from './FeedRecordCard/index.vue'

/* 登录状态 */
const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

/* 查询表单 */
const formData = reactive({
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
const feedRecordList = reactive([
  {
    id: '666',
    petName: '大白',
    feedPlace: '兴业苑3舍',
    datetime: '2022-3-27 12:15',
    remarks: '今日中午左右喂了3根猫条和一点矿泉水，大家可以等到晚上再投喂~',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F9937871258%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=407b23fae0e8793547448d61ac070e22',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com%2Fuploads%2Fallimg%2F190924%2F278-1Z924101324496.jpg&refer=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=33707813d1f506398dd6a962d29dbbb4',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.infzm.com%2Fmedias%2Fcms%2Fmedias%2Fimage%2F20%2F03%2F21%2FNgAwbDA6J2fNJc5YmftoQTJ1i5mKmlrxnEeZyyRS.jpeg&refer=http%3A%2F%2Fimages.infzm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=7d60ebc0a875aed80b9b241e6c10772b'
    ]
  },
  {
    id: '666',
    petName: '大白',
    feedPlace: '兴业苑3舍',
    datetime: '2022-3-27 12:15',
    remarks: '今日中午左右喂了3根猫条和一点矿泉水，大家可以等到晚上再投喂~',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F9937871258%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=407b23fae0e8793547448d61ac070e22',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com%2Fuploads%2Fallimg%2F190924%2F278-1Z924101324496.jpg&refer=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=33707813d1f506398dd6a962d29dbbb4',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.infzm.com%2Fmedias%2Fcms%2Fmedias%2Fimage%2F20%2F03%2F21%2FNgAwbDA6J2fNJc5YmftoQTJ1i5mKmlrxnEeZyyRS.jpeg&refer=http%3A%2F%2Fimages.infzm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=7d60ebc0a875aed80b9b241e6c10772b'
    ]
  },
  {
    id: '666',
    petName: '大白',
    feedPlace: '兴业苑3舍',
    datetime: '2022-3-27 12:15',
    remarks: '今日中午左右喂了3根猫条和一点矿泉水，大家可以等到晚上再投喂~',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F9937871258%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=407b23fae0e8793547448d61ac070e22',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com%2Fuploads%2Fallimg%2F190924%2F278-1Z924101324496.jpg&refer=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=33707813d1f506398dd6a962d29dbbb4',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.infzm.com%2Fmedias%2Fcms%2Fmedias%2Fimage%2F20%2F03%2F21%2FNgAwbDA6J2fNJc5YmftoQTJ1i5mKmlrxnEeZyyRS.jpeg&refer=http%3A%2F%2Fimages.infzm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=7d60ebc0a875aed80b9b241e6c10772b'
    ]
  },
  {
    id: '666',
    petName: '大白',
    feedPlace: '兴业苑3舍',
    datetime: '2022-3-27 12:15',
    remarks: '今日中午左右喂了3根猫条和一点矿泉水，大家可以等到晚上再投喂~',
    imgList: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F9937871258%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=407b23fae0e8793547448d61ac070e22',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com%2Fuploads%2Fallimg%2F190924%2F278-1Z924101324496.jpg&refer=http%3A%2F%2Fstatic-ixiupet-1257124021.cos.ap-guangzhou.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=33707813d1f506398dd6a962d29dbbb4',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.infzm.com%2Fmedias%2Fcms%2Fmedias%2Fimage%2F20%2F03%2F21%2FNgAwbDA6J2fNJc5YmftoQTJ1i5mKmlrxnEeZyyRS.jpeg&refer=http%3A%2F%2Fimages.infzm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650790288&t=7d60ebc0a875aed80b9b241e6c10772b'
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
</style >
