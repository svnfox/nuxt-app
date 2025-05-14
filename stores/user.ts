import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    isAuthenticated: false,
    userInfo: {},
  }),
  actions: {
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo
    },
  },
})
