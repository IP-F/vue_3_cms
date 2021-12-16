<!--  -->
<template>
  <div class="loginAccount">
    <el-form
      ref="FormRef"
      :model="accountForm"
      :rules="rules"
      label-width="70px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from 'vue'
import { ElForm } from 'element-plus'
import HQrequest from '@/service'
export default defineComponent({
  name: 'loginAccount',
  setup() {
    const accountForm = reactive({
      name: '',
      password: ''
    })
    const rules = {
      name: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        {
          pattern: /^[A-z0-9]{5,10}$/,
          message: '请输入5-10个字母数字',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          pattern: /^[A-z0-9]{5,10}$/,
          message: '请输入5-10个字母数字',
          trigger: 'blur'
        }
      ]
    }
    const FormRef = ref<InstanceType<typeof ElForm>>()
    const asd = () => {
      console.log('accountForm: ', accountForm)
      FormRef.value?.validate((valid) => {
        console.log('valid: ', valid)
        if (valid) {
          interface dataType {
            bizStatus: string
            code: string
            msg: string
          }
          const data = {
            name: accountForm.name,
            password: accountForm.password
          }
          HQrequest.request<dataType>({
            url: '/login',
            method: 'POST',
            data
          }).then((res) => {
            console.log('res: ', res)
          })
        }
      })
    }
    return { accountForm, rules, FormRef, asd }
  }
})
</script>
<style lang="less" scoped>
.loginAccount {
}
</style>
