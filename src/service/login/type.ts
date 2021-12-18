export interface dataType<T = any> {
  code: number
  data: T
}
export interface loginResultType {
  id: number
  name: string
  token: string
}
export interface loginParamsType {
  bizStatus: string
  code: string
  msg: string
  data: any
}

export enum loginEnum {
  account = '/login',
  userInfo = '/users/',
  roleMenu = '/role/'
}
