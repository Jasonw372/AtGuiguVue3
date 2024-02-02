import type { AxiosResponseData } from '@/api/type'

export interface LoginForm {
  username: string
  password: string
}

type token = string

export type LoginResponseData = AxiosResponseData<token>

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo[]
}

export type UserInfoResponseData = AxiosResponseData<user>
