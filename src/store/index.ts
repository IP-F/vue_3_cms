import { createStore } from 'vuex'
import loginStore from './login/login'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'asd'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginStore
  }
})
export default store
