import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore({
  id: 'userInfoStore',
  state: () => {
    return {
      userInfo: null,
      isLogged: false,
      token: null
    }
  },
  actions: {
    getUserInfo () {
      if (localStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        this.token = localStorage.getItem('token')
        this.isLogged = true
      }
    },
    saveUserInfo (userInfo: INFO.userInfo, token: string) {
      if (!userInfo) return
      this.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('token', token)
    },
    removeUserInfo () {
      this.userInfo = null
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
    }
  }
})
