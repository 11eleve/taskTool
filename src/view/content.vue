<script setup>
import Circle from '../components/circle.vue'
import Progress from '../components/progress.vue'

let nodeArr = [{title: 'hello', content : 'ok', isFinish: false}];

</script>

<template>
  <div class="content">
    <div v-for="node in nodeArr">
      <Circle />
    </div>
    <Progress />
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