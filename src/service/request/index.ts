import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { HQInterceptorConfig, HQAxiosRequestConfig } from './type'

export default class HQrequest {
  instance: AxiosInstance
  interceptors?: HQInterceptorConfig

  constructor(config: HQAxiosRequestConfig<any>) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //有拦截实例的执行
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都执行
    this.instance.interceptors.request.use(
      (config) => {
        console.log('config: ', config)
        return config
      },
      (err) => {
        console.log('err: ', err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('config: ', config)
        return config
      },
      (err) => {
        console.log('err: ', err)
        return err
      }
    )
  }

  request<T>(config: HQAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 有拦截请求的执行
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //有拦截请求的执行
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          console.log('res: ', res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: HQAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: HQAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: HQAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HQAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
