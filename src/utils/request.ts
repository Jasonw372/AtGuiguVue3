import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/stores/modules/user'

class ErrorMessageProcesses {
  public static errorMessages: Record<number, string> = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: '请求错误,未找到该资源',
    405: '请求方法未允许',
    408: '请求超时',
    500: '服务器端出错',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求',
  }

  public static netWorkError: string = '网络错误'

  public static getErrorMessage(status: number): string {
    if (this.errorMessages[status]) {
      return this.errorMessages[status]
    }
    return this.netWorkError
  }
}

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  // headers属性请求头，携带公共参数给服务器
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }

  return config
})

request.interceptors.response.use(
  (response) => {
    // 简化数据
    return response.data
  },
  (error) => {
    // 除理http网络错误
    const status = error.response.status
    const errorMessage = ErrorMessageProcesses.getErrorMessage(status)
    ElMessage({
      type: 'error',
      message: errorMessage,
    })
    return Promise.reject(error)
  },
)

export default request
