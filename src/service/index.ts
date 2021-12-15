import HQrequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
export default new HQrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('config------------: ', config)
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('error: ', error)
    },
    responseInterceptor: (res) => {
      console.log('res: ', res)
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('error: ', error)
    }
  }
})
