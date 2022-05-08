import { RouteRecordRaw } from 'vue-router'

const Home = (): unknown => import('../views/Home.vue')
const AdoptionCenter = (): unknown => import('../views/AdoptionCenter.vue')
const FeedingRecord = (): unknown => import('../views/FeedingRecord.vue')
const DonationRecord = (): unknown => import('../views/DonationRecord.vue')
const ExchangeCenter = (): unknown => import('../views/ExchangeCenter.vue')
const ShoppingMall = (): unknown => import('../views/ShoppingMall.vue')
const AllArticle = (): unknown => import('../components/ExchangeComps/AllArticle/index.vue')
const MyArticle = (): unknown => import('../components/ExchangeComps/MyArticle/index.vue')
const ArticleDetail = (): unknown => import('../components/ExchangeComps/ArticleDetail/index.vue')
const PublishArticle = (): unknown => import('../components/ExchangeComps/PublishArticle/index.vue')

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
      title: '投喂记录'
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
    },
    children: [
      {
        path: 'AllArticle',
        component: AllArticle
      },
      {
        path: 'MyArticle',
        component: MyArticle
      },
      {
        path: 'ArticleDetail',
        component: ArticleDetail
      },
      {
        path: 'PublishArticle',
        component: PublishArticle
      }
    ]
  },
  {
    name: 'ShoppingMall',
    path: '/ShoppingMall',
    component: ShoppingMall,
    meta: {
      title: '商店'
    }
  }
]
