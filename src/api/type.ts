export type ResponseData<T> = {
  code: number
  data: T
  message: string
  ok: boolean
}

export type AxiosResponseData<T> = Promise<T>
