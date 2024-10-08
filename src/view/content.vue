<script setup>
import Circle from '../components/circle.vue'
import Progress from '../components/progress.vue'
import { useTaskStore } from '../store/useTaskStore';

const {activeTask, add} = useTaskStore()

const create = () => {
  //弹窗加添加
  pop()
}

const pop = () => {
  //弹窗
}

</script>

<template>
  <div class="content">
    <Progress />
    <button @click="create">添加任务</button>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>