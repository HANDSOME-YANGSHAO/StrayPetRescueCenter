<template>
  <div class="adoptionCenter-container">
    <!-- 查询头部 -->
    <div class="adoptionCenter-header">
      <div class="vagueSearch">
        <el-input v-model="formData.vagueSearchValue" :prefix-icon="Search" placeholder="搜索"></el-input>
        <el-button type="primary" @click="onSimulationQuery">查询</el-button>
      </div>
      <div class="classification">
        <el-form :inline="true" :model="formData" label-position="top">
          <el-form-item label="宠物类别">
            <el-select v-model="formData.petCategory">
              <el-option
                v-for="item in petCategoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="接种狂犬疫苗">
            <el-select v-model="formData.vaccinated">
              <el-option
                v-for="item in vaccinatedOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="领养状态">
            <el-select v-model="formData.adoptionRecord">
              <el-option
                v-for="item in adoptionRecordOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="性格">
            <el-select v-model="formData.character">
              <el-option
                v-for="item in characterOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="publishAdoptionInfo">
        <el-tooltip content="点击发布领养信息" placement="left" effect="light">
          <el-button
            type="primary"
            @click="publishAdoptionInfo"
            :icon="Edit"
            :disabled="!isLogged"
            circle
          />
        </el-tooltip>
        <el-dialog v-model="publishDialogVisible" title="发布领养信息" :close-delay="50">
          <PublishForm v-model:publishDialogVisible="publishDialogVisible" />
        </el-dialog>
      </div>
    </div>
    <!-- 领养宠物列表 -->
    <PetsList v-if="simulationQuery" :pet-list="fakeData" />
    <!-- 分页 -->
    <div class="center">
      <el-pagination
        v-model:currentPage="formData.pagination.pageNum"
        v-model:page-size="formData.pagination.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="formData.pagination.total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import PetsList from './PetsList/index.vue'
import PublishForm from './PublishForm/index.vue'
import {
  petCategoryOptions,
  vaccinatedOptions,
  adoptionRecordOptions,
  characterOptions
} from './common'
import { useUserInfoStore } from '@/store/userInfo'
import { storeToRefs } from 'pinia'

const simulationQuery = ref(true)
const onSimulationQuery = () => {
  simulationQuery.value = false
  setTimeout(() => {
    simulationQuery.value = true
  }, 500)
}
const INITIAL_DATA = {
  vagueSearchValue: '',
  petCategory: '3',
  vaccinated: '3',
  adoptionRecord: '3',
  character: '5',
  pagination: {
    pageNum: 1,
    pageSize: 6,
    total: 12
  } as INFO.pagination
}
const formData = ref({
  ...INITIAL_DATA
})

/* 这里发送请求，获取到领养宠物列表数据 */
const fakeData = [
  {
    id: '120',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20110%2F27%2Fw1080h1347%2F20211209%2Ff72b-69d9c87e8006f66ab01ff9bf2458847b.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654522804&t=f24fec45ca973c7ee6f738f856769dff',
    introduction:
      '大橘猫大姨，目前年龄大概1岁出头，虽然叫着大姨大姨，但人家可是可爱的女孩纸！目前已经通过重邮猫狗救助中心的帮助，进行了猫瘟、狂犬病疫苗的注射，相对比较健康，性格也是比较成熟稳重，比较乖巧的那一类猫咪，有意的朋友可以联系qq99499212'
  },
  {
    id: '121',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0706%252F32ee8831j00qvsvnp001qc000go00dcc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650558231&t=9c31d4bc70cb27066f3b83172057e8bd',
    introduction:
      '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
  },
  {
    id: '122',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2020_Website_appreciate%2F2020-05-26%2F20200526233701.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650558231&t=bb37735bbe0d489178f6375850d426a6',
    introduction:
      '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
  },
  {
    id: '123',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi2%2F2209909066087%2FO1CN01rVvAM21uptXfWj5Vw_%21%212209909066087.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650558231&t=e6e883771b3dd1fdd5909fa01a52451f',
    introduction:
      '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
  },
  {
    id: '124',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi2%2F2200724824132%2FO1CN01Eoz2zb1gOV6Wded2r_%21%212200724824132.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650558231&t=5b7310702e02e0c90474478f29f3e8e3',
    introduction:
      '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
  },
  {
    id: '125',
    coverSrc:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F44405%2FsaXaYhqnpsEFF8nmIgYshgG7WF5fiJWQec5NxmE7.jpeg&refer=http%3A%2F%2Fimg.91huoke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650558231&t=5a267c0d10d2c9997eaa7893e28ba3fd',
    introduction:
      '柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。柴犬是日本国宝，常见的赤色柴犬价格都在6000元到30000元之间。'
  }
]

const handleCurrentChange = () => {
  console.log('现在的页数改变, 根据查询表单查询分页领养宠物数据列表')
  onSimulationQuery()
}

/* 发布领养信息按钮&对话框 */

const userInfoStore = useUserInfoStore()
const { isLogged } = storeToRefs(userInfoStore)

const publishDialogVisible = ref(false)
const publishAdoptionInfo = () => {
  publishDialogVisible.value = true
}
</script>

<style scoped lang="scss">
.adoptionCenter-container {
  padding: 30px 1rem;
}
.adoptionCenter-header {
  .vagueSearch {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    .el-input {
      width: 70%;
    }
    .el-button {
      width: 150px;
    }
  }
  .publishAdoptionInfo {
    display: flex;
    justify-content: flex-end;
  }
}
.el-pagination {
  margin-top: 30px;
}
</style>
