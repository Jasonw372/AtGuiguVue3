import type { RouteRecordRaw } from 'vue-router'

export interface UserState {
  token: string | null
  menuRoutes: readonly RouteRecordRaw[]
  avatar: string
  username: string
  roles: string[]
}
