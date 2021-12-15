import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface HQInterceptorConfig<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface HQAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HQInterceptorConfig<T>
}
