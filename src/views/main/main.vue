<template>
  <div class="main">main</div>
  <router-link to="/login">login</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'main',
  setup() {
    return {}
  }
})
</script>

<style scope lang="less">
.main {
}
</style>
