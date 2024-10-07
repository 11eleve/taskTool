<template>
  <el-steps style="max-width: 600px" :active="2" align-center>
    <el-step v-for="item in taskArr" :title="item.title" :description="item.description" @click="finish(item)" />
  </el-steps>
</template>

<script setup lang="ts">
import { useTaskStore } from '../store/useTaskStore';
import type { taskType } from '../util/taskType';

const {get} = useTaskStore()

let taskArr: taskType[] = []

taskArr = get()

const finish = (item: taskType) => {
  item.finished = true
  console.log('完成了')
}
</script>