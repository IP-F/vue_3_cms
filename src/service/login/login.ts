import HQrequest from '@/service'
import { dataType, loginEnum, loginParamsType, loginResultType } from './type'

export const loginRequest = (data: loginParamsType) => {
  return HQrequest.post<dataType<loginResultType>>({
    url: loginEnum.account,
    data: data
  })
}

export const getUserInfoById = (id: number) => {
  return HQrequest.get<dataType>({
    url: loginEnum.userInfo + id
  })
}
export const getRoleMenuById = (id: number) => {
  return HQrequest.get<dataType>({
    url: loginEnum.roleMenu + id + '/menu'
  })
}
