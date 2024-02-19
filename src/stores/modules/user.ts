import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
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
    }
  },
  // 异步｜逻辑
  actions: {
    async userLogin(data: LoginForm) {
      const result = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token!
        // 写入localStorage
        localStorage.setItem('token', this.token)
        return 'ok'
      } else {
        throw new Error(result.data.message)
      }
    },

    userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      return 'ok'
    },

    async userInfo() {
      const result = await reqUserInfo()
      if (result.code === 200) {
        if (!result.data.checkUser) {
          throw new Error('获取用户信息失败')
        }

        this.avatar = result.data.checkUser.avatar
        this.username = result.data.checkUser.username
        this.roles = result.data.checkUser.roles

        return 'ok'
      } else {
        throw new Error(result.data.message)
      }
    },
  },
  getters: {},
})

export default useUserStore
