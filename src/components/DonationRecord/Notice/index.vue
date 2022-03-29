<template>
  <div class="notice-container">
    <div class="notice-title">{{ '通告' }}</div>
    <div class="notice-list">
      <el-table :data="tableData" style="width: 60%">
        <el-table-column prop="date" label="日期" width="180"/>
        <el-table-column prop="title" label="标题" />
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button @click="examine(scope.row.id)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="查看通告" v-model="examineDialogVisible">
        <div class="dialog-item">
          <div class="label">{{ '标题:' }}</div>
          <div class="describe">{{ dialogTitle }}</div>
        </div>
        <div class="dialog-item">
          <div class="label">{{ '内容:' }}</div>
          <div class="describe">{{ dialogContent }}</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

/* 通告列表数据 */
console.log('发送请求获得通告列表数据')
const tableData:Ref<INFO.Notice[]> = ref([
  {
    id: '5',
    date: '2016-05-05',
    title: '五期募捐活动',
    content: '五期募捐活动内容'
  },
  {
    id: '4',
    date: '2016-05-04',
    title: '四期募捐活动',
    content: '四期募捐活动内容'
  },
  {
    id: '3',
    date: '2016-05-03',
    title: '三期募捐活动',
    content: '三期募捐活动内容'
  },
  {
    id: '2',
    date: '2016-05-02',
    title: '二期募捐活动',
    content: '二期募捐活动内容'
  },
  {
    id: '1',
    date: '2016-05-01',
    title: '一期募捐活动',
    content: '一期募捐活动内容'
  }
])

/* 通告详情对话框 */
const examineDialogVisible = ref(false)
const dialogTitle = ref('标题')
const dialogContent = ref('内容')
const examine = (id: string) => {
  const noticeData = tableData.value.find((item:INFO.Notice) => {
    return item.id === id
  })
  dialogTitle.value = noticeData.title
  dialogContent.value = noticeData.content
  examineDialogVisible.value = true
}
</script>

<style scoped lang="scss">
.notice-container {
  background-color: #fafafa;
  .notice-title {
    height: 100px;
    font-size: 30px;
    color: #ff6620;
    text-align: center;
    line-height: 100px;
  }
  .notice-list {
    margin: 30px 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-dialog {
  .dialog-item {
    display: flex;
    .label {
      text-align: right;
      width: 100px;
      line-height: 32px;
      font-size: 15px;
      font-weight: bold;
      color: #606266;
    }
    .describe {
      margin-left: 50px;
      width: 70%;
      font-size: 14px;
      line-height: 32px;
    }
  }
}
</style>
