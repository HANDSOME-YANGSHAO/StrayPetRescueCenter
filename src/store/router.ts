import { defineStore } from 'pinia'

export const useRouterStore = defineStore({
  id: 'routerStore',
  state: () => {
    return {
      lastPath: ''
    }
  },
  actions: {
    getAciveIndex () {
      /* 延时目的：等待路由全局导航函数（路由钩子）执行完毕， 拿到最新的lastPath */
      setTimeout(() => {
        if (localStorage.getItem('lastPath')) {
          this.lastPath = localStorage.getItem('lastPath')
        }
      }, 300)
    }
  }
})
