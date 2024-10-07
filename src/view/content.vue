<script setup>
import Circle from '../components/circle.vue'
import Progress from '../components/progress.vue'


</script>

<template>
  <div class="content">
    <Progress />
    <button @click="create">添加任务</button>
  </div>
</template>

<style>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>