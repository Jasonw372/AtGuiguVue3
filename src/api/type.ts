export interface ResponseData<T> {
  code: number
  data: T
}

export type AxiosResponseData<T> = Promise<ResponseData<T>>
