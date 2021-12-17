import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

const loginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userName: ''
    }
  },
  mutations: {},
  actions: {
    accountLogin({ commit }, payload) {
      console.log('payload: ', payload)
    }
  }
}

export default loginStore
