<template>
  <el-steps style="max-width: 600px" :active="2" align-center>
    <el-step v-for="item in taskArr" :title="item.title" :description="item.description" />
  </el-steps>
  <button @click="create">创建</button>
</template>

<script setup lang="ts"> 
import type { taskType } from '../util/taskType';

//测试数据
const one : taskType = {
  title: 'hello',
  description: 'ok',
  finished: true,
}

const taskArr: taskType[] = []

const create = () => {
  
}

const add = (taskTitle: string, taskDescription: string) => {

  taskArr.push({
    title: taskTitle,
    description: taskDescription,
    finished: false
  })
}

taskArr.push(one)
</script>