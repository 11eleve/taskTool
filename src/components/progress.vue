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
const activeTask = defineProps(['active'])

// 获取任务
taskArr = getTest(activeTask.active as string)[0]

const finish = (item: taskType) => {
  item.finished = true
}
</script>

<style>
.order-detail-step .el-step__description.is-finish {
  white-space: pre-line;
}
</style>