// 统一管理用户相关接口
import request from '@/utils/request'
import type {
  LoginForm,
  LoginResponseData,
  UserInfoResponseData,
  LogoutResponseData,
} from '@/api/user/type'

// 统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: LoginForm): LoginResponseData => {
  // 请求体的类型，响应体的类型
  return request.post(API.LOGIN_URL, data)
}

export const reqUserInfo = (): UserInfoResponseData => {
  return request.get(API.USERINFO_URL)
}

export const reqLogout = (): LogoutResponseData => {
  return request.post(API.LOGOUT_URL)
}
