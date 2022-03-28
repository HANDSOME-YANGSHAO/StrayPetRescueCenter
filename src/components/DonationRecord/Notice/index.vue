<template>
  <div class="notice-container">
    <div class="notice-title">
      {{ '通告' }}
    </div>
    <div class="notice-list">
      <el-table :data="tableData" style="width: 80%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="title" label="标题" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    title: '二期捐款'
  },
  {
    date: '2016-05-03',
    title: '二期捐款'
  },
  {
    date: '2016-05-03',
    title: '二期捐款'
  },
  {
    date: '2016-05-03',
    title: '二期捐款'
  },
  {
    date: '2016-05-03',
    title: '二期捐款'
  },
  {
    date: '2016-05-03',
    title: '二期捐款'
  }
]
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
    margin: 30px 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
