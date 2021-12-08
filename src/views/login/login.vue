<template>
  <div class="login">login</div>
  <el-button type="primary">Primary</el-button>
  <router-link to="/main">main</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login',
  setup() {
    return {}
  }
})
</script>

<style scope lang="less">
.login {
}
</style>
