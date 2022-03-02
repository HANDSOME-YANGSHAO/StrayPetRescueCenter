import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
