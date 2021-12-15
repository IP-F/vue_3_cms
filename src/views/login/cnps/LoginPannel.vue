<!--  -->
<template>
  <div class="LoginPannel">
    <h2 class="title">后台管理系统</h2>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号登录" name="first">
          <LoginAccount ref="AccountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="second">
          <LoginPhone ref="PhoneRef" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <div class="login-tools mgt5 flex-row-bet align-items-c">
      <el-checkbox v-model="isPassword" label="记住密码"></el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="loginHandle"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
export default {
  name: 'LoginPannel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref('first')
    const isPassword = ref(true)
    const AccountRef = ref<InstanceType<typeof LoginAccount>>()
    const PhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const handleClick = () => {
      console.log('handleClick: ')
    }
    const loginHandle = () => {
      console.log('loginHandle: ')
      AccountRef.value?.asd()
    }
    return {
      activeName,
      isPassword,
      AccountRef,
      PhoneRef,
      handleClick,
      loginHandle
    }
  }
}
</script>
<style lang="less" scoped>
.LoginPannel {
  margin-top: -200px;
  width: 320px;
  .login-tools {
    width: 100%;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
