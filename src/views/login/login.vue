<template>
  <div class="login flex-col-center">
    <div class="login-pannel">
      <h2 class="title">后台管理系统</h2>
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号登录" name="first">
            <LoginAccount />
          </el-tab-pane>
          <el-tab-pane label="手机登录" name="second">
            <LoginPhone />
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <div class="login-tools mgt5 flex-row-bet align-items-c">
        <el-checkbox v-model="isPassword" label="记住密码"></el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button class="login-btn" type="primary">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './cnps/login-account.vue'
import LoginPhone from './cnps/login-phone.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref('first')
    const isPassword = ref(true)
    const handleClick = () => {
      console.log('handleClick: ')
    }
    return { activeName, isPassword, handleClick }
  }
})
</script>

<style scope lang="less">
.login {
  width: 100%;
  height: 100%;

  .login-pannel {
    margin-top: -200px;
    width: 320px;
    .login-tools {
      width: 100%;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
