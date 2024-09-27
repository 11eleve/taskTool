<script setup>
import Circle from '../baseComponent/circle.vue'


let nodeArr = [{title: 'hello', content : 'ok', isFinish: false}];

</script>

<template>
  <div class="content">
    <div v-for="node in nodeArr">
      <Circle />
    </div>
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