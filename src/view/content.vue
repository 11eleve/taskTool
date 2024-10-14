<script setup>
import { progressProps } from 'element-plus';
import Circle from '../components/circle.vue'
import Progress from '../components/progress.vue'
import { useTaskStore } from '../store/useTaskStore';
import { ElMessage, ElMessageBox } from 'element-plus'


const {addTest, taskMap} = useTaskStore()

const {active} = defineProps(['active']);
  
const open = () => {
	ElMessageBox.prompt('输入节点名称', '添加任务', {
		confirmButtonText: 'OK',
		cancelButtonText: 'Cancel',
		// inputPattern:
		// 	/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
		// inputErrorMessage: 'Invalid',
	})
		.then(({ value }) => {
      addTest(active, value)
      console.log(taskMap)
			ElMessage({
				type: 'success',
				message: `Your task is:${value}`,
			})
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: 'Input canceled',
			})
		})
}

</script>

<template>
  <div class="content">
    <Progress :active="active"/>
    <button @click="open">添加任务</button>
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