import type { AxiosResponseData, ResponseData } from '@/api/type'

export interface LoginForm {
  username: string
  password: string
}

type token = string

interface userInfo {
  name: string
  avatar: string
  roles: string[]
  button: string[]
  routes: string[]
}

export type UserInfoResponseData = AxiosResponseData<ResponseData<userInfo>>
export type LoginResponseData = AxiosResponseData<ResponseData<token>>
export type LogoutResponseData = AxiosResponseData<ResponseData<null>>
