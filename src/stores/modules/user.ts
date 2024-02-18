import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import type { UserState } from '@/stores/modules/types/type'
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  // 数据存储地址
  state: (): UserState => {
    return {
      token: '',
      menuRoutes: constantRoute,
    }
  },
  // 异步｜逻辑
  actions: {
    async userLogin(data: LoginForm) {
      const result = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data
        return 'ok'
      } else {
        throw new Error(result.data)
      }
    },
  },
  getters: {},
  persist: true,
})

export default useUserStore
