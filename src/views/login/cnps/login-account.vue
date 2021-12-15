<!--  -->
<template>
  <div class="loginAccount">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="50px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="accrount">
        <el-input v-model="ruleForm.accrount"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: 'loginAccount',
  setup() {
    const ruleForm = reactive({
      accrount: '',
      password: ''
    })
    const rules = {
      accrount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    console.log('1-开始创建组件-setup')
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return { ruleForm, rules }
  }
}
</script>
<style lang="less" scoped>
.loginAccount {
}
</style>
