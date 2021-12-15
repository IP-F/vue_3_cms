import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import HQrequest from '@/service'
import './assets/css/index.less'

/* interface dataType {
  bizStatus: string
  code: string
  msg: string
}
HQrequest.request<dataType>({
  url: '/pc/user/getCurrentUser',
  method: 'GET'
}).then((res) => {
  console.log('res: ', res)
}) */

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
