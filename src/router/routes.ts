import { RouteRecordRaw } from 'vue-router'

const Home = (): unknown => import('@/views/Home.vue')
const AdoptionCenter = (): unknown => import('@/views/AdoptionCenter.vue')
const FeedingRecord = (): unknown => import('@/views/FeedingRecord.vue')
const DonationRecord = (): unknown => import('@/views/DonationRecord.vue')
const ExchangeCenter = (): unknown => import('@/views/ExchangeCenter.vue')
const ShoppingMall = (): unknown => import('@/views/ShoppingMall.vue')
const Login = (): unknown => import('@/views/Login.vue')

export const routes: RouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    name: 'Home',
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'AdoptionCenter',
    path: '/AdoptionCenter',
    component: AdoptionCenter,
    meta: {
      title: '领养中心'
    }
  },
  {
    name: 'FeedingRecord',
    path: '/FeedingRecord',
    component: FeedingRecord,
    meta: {
      title: '喂养中心'
    }
  },
  {
    name: 'DonationRecord',
    path: '/DonationRecord',
    component: DonationRecord,
    meta: {
      title: '捐赠中心'
    }
  },
  {
    name: 'ExchangeCenter',
    path: '/ExchangeCenter',
    component: ExchangeCenter,
    meta: {
      title: '交流中心'
    }
  },
  {
    name: 'ShoppingMall',
    path: '/ShoppingMall',
    component: ShoppingMall,
    meta: {
      title: '商城'
    }
  }
]
