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
      if (localStorage.getItem('lastPath')) {
        this.lastPath = localStorage.getItem('lastPath')
      }
    }
  }
})
