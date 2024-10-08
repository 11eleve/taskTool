<script setup>
import Main from './view/main.vue'

const el = document.getElementById('documentLabel');
</script>

<template>
  <div class="app">
    <Main />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw; /* 使用视口的宽度 */
  height: 100vh; /* 使用视口的高度 */
  overflow: hidden; /* 防止溢出 */
}
</style>
