<template>
  <el-steps style="max-width: 100vw"  :space="200" :active="active" align-center>
    <el-step 
    v-for="item in taskArr"
    class="order-detail-step"
    :description="item.description" 
    :title="item.title" 
    @click="finish(item)" 
    :key="item.title"
    />
  </el-steps>
</template>

<script setup lang="ts">
import { useTaskStore } from '../store/useTaskStore';
import type { taskType } from '../util/taskType';

const { getTest } = useTaskStore()

let taskArr: taskType[] = []
let active: number = 0

taskArr = getTest('test')[0]
console.log(getTest('test'))
console.log(taskArr)

const finish = (item: taskType) => {
  item.finished = true
}
</script>

<style>
/* 自定义样式不能加scoped */
.order-detail-step .el-step__description.is-finish {
  white-space: pre-line;
}
</style>