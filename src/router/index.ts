import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
// 刷新header其实直接用layout里porject出去的reloadHeader方法就好了。但是后面会有较多的路由跳转，
// 都需要去刷新header 的激活样式（重新拿取到最新的激活path），需要写大量的重复injcet和调用reloadHeader方法
// 这里就考虑用事件总线库在路由钩子这里去触发header监听的事件就可以了。
import emitter from '@/utils/eventbus'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  localStorage.setItem('lastPath', to.path)
  emitter.emit('reloadHeader')
  next()
})

export default router
