<template>
  <div class="header-container">
    <div class="logo">
      <img src="./img/logo.png" alt="logo" />
    </div>
    <el-menu
      :default-active="!lastPath ? '/home' : lastPath"
      mode="horizontal"
      :router="true"
      active-text-color="#ef4136"
      @select="refreshLastPath"
    >
      <el-menu-item
        v-for="item in menuList"
        :key="item.path"
        :index="item.path"
      >{{ item.meta.title }}</el-menu-item>
    </el-menu>
    <div class="operations">
      <img class="avatar" @click="setUserInfo" :src="avatarSrc" />
      <span class="userName" @click="setUserInfo">{{ userName }}</span>
      <el-popconfirm
        confirm-button-text="确认"
        cancel-button-text="取消"
        title="是否退出当前用户?"
        @confirm="logout"
      >
        <template #reference>
          <div class="logout" v-if="isLogged">
            <svg
              t="1646456100406"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1430"
              width="25"
              height="25"
            >
              <path
                d="M480.631 534.862H72.307c-12.76 0-21.267-8.507-21.267-21.267s8.507-21.267 21.267-21.267h408.324c12.76 0 21.267 8.507 21.267 21.267s-8.507 21.267-21.267 21.267z"
                p-id="1431"
              />
              <path
                d="M284.976 726.264c-4.253 0-12.76 0-17.013-8.507-8.507-8.507-8.507-21.267 0-29.774l182.895-178.641-182.895-174.389c-8.507-8.506-8.507-21.267 0-29.773 8.506-8.507 21.266-8.507 29.773 0l195.655 195.655c4.254 4.253 8.507 8.507 8.507 17.013 0 4.254-4.253 12.76-8.507 17.014L297.736 722.01c-4.253 4.254-8.507 4.254-12.76 4.254z"
                p-id="1432"
              />
              <path
                d="M999.543 1024H361.537c-12.76 0-21.267-8.507-21.267-21.267V794.318c0-12.76 8.507-21.267 21.267-21.267s21.267 8.507 21.267 21.267v187.148h595.472V45.724H382.804v191.402c0 8.506-8.507 21.267-21.267 21.267s-21.267-12.76-21.267-21.267V24.456c0-12.76 8.507-21.266 21.267-21.266h638.006c12.76 0 21.267 8.507 21.267 21.267v978.276c0 12.76-8.507 21.267-21.267 21.267z"
                p-id="1433"
              />
              <path
                d="M999.543 1024h-8.507l-340.27-153.121c-8.506-8.507-12.76-17.014-12.76-25.52v-667.78c0-8.507 4.254-17.014 12.76-21.267L991.036 3.19c8.507-4.253 12.76-4.253 21.267 0 4.254 8.507 8.507 12.76 8.507 21.267v978.276c0 8.507-4.253 12.76-8.507 17.014-4.253 0-8.507 4.253-12.76 4.253zM680.54 832.598l297.736 136.108V58.484L680.54 194.592v638.006z"
                p-id="1434"
              />
              <path
                d="M829.408 513.595h-85.067c-12.76 0-21.267-8.507-21.267-21.267s8.506-21.267 21.267-21.267h85.067c12.76 0 21.267 8.507 21.267 21.267s-8.507 21.267-21.267 21.267z"
                p-id="1435"
              />
            </svg>
          </div>
        </template>
      </el-popconfirm>
    </div>
  </div>
  <Drawer v-model:drawerVisible="drawerVisible" v-model:formStatus="formStatus" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'
import Drawer from './Drawer/index.vue'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/store/userInfo'
import { useRouterStore } from '@/store/router'
import { storeToRefs } from 'pinia'
import emitter from '@/utils/eventBus'

const menuList = routes.filter((item: RouteRecordRaw) => {
  return item.name !== 'Index' && item.name !== 'Login'
})

const userInfoStore = useUserInfoStore()
const { isLogged, userInfo } = storeToRefs(userInfoStore)

const routerStore = useRouterStore()
const { lastPath } = storeToRefs(routerStore)
const refreshLastPath = (index:string) => {
  routerStore.getAciveIndex()
  if (index === '/ExchangeCenter') emitter.emit('toChangeNav')
}

const avatarSrc = computed(() => {
  return isLogged.value
    ? userInfo.value.avatar
    : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F52708%2F%2FsBuoyFCYxwYuQORKgby1y40Zg8nYzc2IvMeucblk.jpeg&refer=http%3A%2F%2Fimg.91huoke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648908845&t=36a1ac79ec1d3c2403516a2460c43396'
})
const userName = computed(() => {
  return isLogged.value ? userInfo.value.userName : '游客状态'
})

const drawerVisible = ref(false)
const formStatus = ref(0) // 0:登陆 1：注册 2：修改个人信息
const setUserInfo = () => {
  formStatus.value = isLogged.value ? 2 : 0
  drawerVisible.value = true
}
const logout = () => {
  userInfoStore.removeUserInfo()
  userInfoStore.isLogged = false
  ElMessage({
    type: 'success',
    showClose: true,
    message: '退出登录'
  })
}

// 全局监听跨组件需要打开登录的抽屉的事件
// emitter.on('openLoginDraw', () => {
//   console.log('触发！！！')
//   drawerVisible.value = !drawerVisible.value
// })
</script>

<style scoped lang="scss">
.header-container {
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 10;
  padding: 0 40px;
  box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-menu {
    height: 98%;
    width: 60%;
  }
  .logo > img {
    height: 60px;
    width: 310px;
  }
  .operations {
    cursor: pointer;
    margin-right: 50px;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .avatar {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    .userName {
      width: 100px;
      line-height: 100%;
      text-align: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      font-weight: bold;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
