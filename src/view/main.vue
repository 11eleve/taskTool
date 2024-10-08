<script setup>
import Tabs from './tabs.vue'
import Header from './header.vue'
import Content from './content.vue'
</script>

<template>

  <Header />
  <Content />
</template>

<style scoped>
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