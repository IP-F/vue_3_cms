<template>
  <div class="login flex-col-center">
    <LoginPannel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPannel from './cnps/LoginPannel.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginPannel
  },
  setup() {
    return {}
  }
})
</script>

<style scope lang="less">
.login {
  width: 100%;
  height: 100%;
}
</style>
