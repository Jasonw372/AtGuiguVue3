import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/user/type'
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
import type { UserState } from '@/stores/modules/types/type'
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  // 数据存储地址
  state: (): UserState => {
    return {
      token: localStorage.getItem('token') || '',
      menuRoutes: constantRoute,
      avatar: '',
      username: '',
      roles: [],
      buttons: [],
      routes: [],
    }
  },
  // 异步｜逻辑
  actions: {
    async userLogin(data: LoginForm) {
      const result = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data
        // 写入localStorage
        localStorage.setItem('token', this.token)
        return 'ok'
      } else {
        throw new Error(result.data)
      }
    },

    async userLogout() {
      const result = await reqLogout()
      if (result.code === 200) {
        this.token = ''
        localStorage.removeItem('token')
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    async userInfo() {
      const result = await reqUserInfo()
      if (result.code === 200) {
        this.avatar = result.data.avatar
        this.username = result.data.name
        this.roles = result.data.roles
        this.buttons = result.data.button

        return 'ok'
      } else {
        throw new Error(result.message)
      }
    },
  },
  getters: {},
})

export default useUserStore
