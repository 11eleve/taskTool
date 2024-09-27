<script setup>
import Header from './header.vue';
import Content from './content.vue';
</script>

<template>
  <div class="display">
    <Header class="header"/>
    <Content class="content"/>
  </div>
</template>

<style>

.display {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 1;
}
.content {
  flex: 12;
}
</style>