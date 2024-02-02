// 统一管理用户相关接口
import request from '@/utils/request'
import type {
  LoginForm,
  LoginResponseData,
  UserInfoResponseData,
} from '@/api/user/type'

// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm): LoginResponseData => {
  // 请求体的类型，响应体的类型
  return request.post(API.LOGIN_URL, data)
}

export const reqUserInfo = (): UserInfoResponseData => {
  return request.get(API.USERINFO_URL)
}
