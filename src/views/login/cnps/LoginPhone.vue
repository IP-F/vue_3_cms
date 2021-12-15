<template>
  <div class="loginPhone">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="accrount">
        <el-input v-model="ruleForm.accrount"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="flex-row">
          <el-input class="mgr10" v-model="ruleForm.password"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  name: 'loginPhone',
  setup() {
    const ruleForm = reactive({
      accrount: '',
      password: ''
    })
    const rules = {
      accrount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    return { ruleForm, rules }
  }
})
</script>
<style lang="less" scoped>
.loginPhone {
}
</style>
