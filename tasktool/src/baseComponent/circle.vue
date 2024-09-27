<script setup>
</script>

<template>
  <div class="circle-outer"></div>
</template>

<style>
.circle-outer {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 10px solid #afb4db;
  transition: border 0.1s ease; /* 平滑过渡效果 */
}
.circle-outer:hover {
  border: 12px solid #afb4db;
  height: 30px; /* 高度增加 */
  width: 30px; /* 宽度增加 */
}
</style>