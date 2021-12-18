import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import localCache from '@/utils/store'
import {
  loginRequest,
  getUserInfoById,
  getRoleMenuById
} from '@/service/login/login'

const loginStore: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userName: '',
      token: '',
      userInfo: {},
      roleMenu: []
    }
  },
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveRoleMenu(state, roleMenu) {
      state.roleMenu = roleMenu
    }
  },
  actions: {
    async accountLogin({ commit }, payload) {
      //1 用户登录
      const loginResult = await loginRequest(payload.data)
      if (loginResult == undefined) return false
      const { id, token } = loginResult.data
      if (payload.isKeepRemenber) {
        localCache.setItem('account', payload.data.name)
        localCache.setItem('password', payload.data.password)
        localCache.setItem('token', token)
      } else {
        localCache.deleteItem('account')
        localCache.deleteItem('password')
      }
      commit('saveToken', token)

      //2 用户信息
      const UserInfoResult = await getUserInfoById(id)
      console.log('UserInfoResult: ', UserInfoResult)
      if (UserInfoResult == undefined) return false
      commit('saveUserInfo', UserInfoResult.data)
      localCache.setItem('userInfo', UserInfoResult.data)

      //2 角色菜单
      const RoleMenuResult = await getRoleMenuById(id)
      console.log('RoleMenuResult: ', RoleMenuResult)
      if (RoleMenuResult == undefined) return false
      commit('saveRoleMenu', RoleMenuResult.data)
      localCache.setItem('roleMenu', RoleMenuResult.data)
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getItem('token')
      if (token) {
        commit('saveToken', token)
      }
      const userInfo = localCache.getItem('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const roleMenu = localCache.getItem('roleMenu')
      if (roleMenu) {
        commit('saveRoleMenu', roleMenu)
      }
    }
  }
}

export default loginStore
