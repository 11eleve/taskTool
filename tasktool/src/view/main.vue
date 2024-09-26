<script setup>
import Header from './header.vue';
import Content from './content.vue';
</script>

<template>
  <div class="display">
    <Header />
    <Content />
  </div>
</template>

<style>
.display {
  display: flex;
  flex-direction: column;
}
</style>