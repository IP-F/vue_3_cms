import HQrequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import Store from '@/utils/store'

export default new HQrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('config------------: ', config)
      const token = Store.getItem('token')
      if (token) {
        config.headers && (config.headers.authorization = `Bearer ${token}`)
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('error: ', error)
    },
    responseInterceptor: (res) => {
      console.log('res: ', res)
      return res.data
    },
    responseInterceptorCatch: (error) => {
      console.log('error: ', error)
    }
  }
})
