<script setup>
import { progressProps } from 'element-plus';
import Circle from '../components/circle.vue'
import Progress from '../components/progress.vue'
import { useTaskStore } from '../store/useTaskStore';

console.log('content start')

const {activeTask, add} = useTaskStore()


// const create = () => {
//   //弹窗加添加
//   pop()
// }

// const pop = () => {
//   //弹窗
// }

const {active} = defineProps(['active']);
console.log(active)

</script>

<template>
  <div class="content">
    <Progress :active="active"/>
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