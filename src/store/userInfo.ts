import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore({
  id: 'userInfoStore',
  state: () => {
    return {
      isLogged: false
    }
  },
  actions: {
    changeLoginStatus () {
      this.isLogged = !this.isLogged
    }
  }
})
