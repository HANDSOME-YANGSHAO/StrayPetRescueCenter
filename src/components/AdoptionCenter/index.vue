<template>
  <div class="adoptionCenter-container">
    <div class="adoptionCenter-header">
      <div class="vagueSearch">
        <el-input v-model="formData.vagueSearchValue" :prefix="Search" placeholder="搜索"></el-input>
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="classification">
      <el-form :inline="true" :model="formData" label-position="top">
        <el-form-item label="宠物类别">
          <el-select v-model="formData.petCategory" size="large">
            <el-option
              v-for="item in petCategoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="接种狂犬疫苗">
          <el-select v-model="formData.vaccinated" size="large">
            <el-option
              v-for="item in vaccinatedOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="健康情况">
          <el-select v-model="formData.health" size="large">
            <el-option
              v-for="item in healthOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const petCategoryOptions = [
  {
    value: '1',
    label: '犬科'
  },
  {
    value: '2',
    label: '猫科'
  },
  {
    value: '3',
    label: '其它'
  }
]
const vaccinatedOptions = [
  {
    value: '0',
    label: '未接种'
  },
  {
    value: '1',
    label: '已接种'
  }
]
const healthOptions = [
  {
    value: '0',
    label: '健康'
  },
  {
    value: '1',
    label: '良好(轻微症状)'
  },
  {
    value: '2',
    label: '患有疾病（需要救助）'
  }
]

const INITIAL_DATA = {
  vagueSearchValue: '',
  petCategory: '1',
  vaccinated: '0',
  health: '0'
}
const formData = ref({
  ...INITIAL_DATA
})

</script>

<style scoped lang="scss">
.adoptionCenter-container {
  padding: 30px 1rem;
}
.vagueSearch {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  .el-input {
    width: 30%;
  }
  .el-button {
    width: 150px;
  }
}
</style>
