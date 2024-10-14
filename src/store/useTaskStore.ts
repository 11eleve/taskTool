import { defineStore } from 'pinia'
import { taskType } from '../util/taskType'
import { descriptionItemProps } from 'element-plus'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {

  let activeTask = ''
  let taskMap = ref(new Map())

  //测试数据
  taskMap.value.set('test', [])
  taskMap.value.get('test').push([
    {title: "创建项目", description: "step1", finished: false},
    {title: "加载项目", description: "step2", finished: false}, 
    {title: "运行项目", description: "step3", finished: false},
    {title: "结束项目", description: "step4", finished: false}
  ])

  taskMap.value.set('test6', [])
  taskMap.value.get('test6').push([
    {title: "创建", description: "step11", finished: false},
    {title: "加载", description: "step12", finished: false}, 
    {title: "运行", description: "step13", finished: false},
    {title: "结束", description: "step14", finished: false}
  ])

  function add() {
    if (taskMap.value.has(activeTask)) {
      return
    }
    taskMap.value.set(activeTask, [])
  }

  function addTest(name: string, title: string) {
    if (!taskMap.value.has(name)) {
      taskMap.value.set(name, [])
    }
    taskMap.value.get(name)[0].push({
      title: title,
      description: `step${taskMap.value.get(name)[0].length + 1}`,
      isFinish: false
    })
  }

  function remove(name: string) {
    if (!taskMap.value.has(name)) {
      return
    }
    taskMap.value.delete(name)
  }

  function get() {
    if (!taskMap.value.has(activeTask)) {
      return
    }
    return taskMap.value.get(activeTask)
  }

  function getTest(name: string) {
    if (!taskMap.value.has(name)) {
      return
    }
    return taskMap.value.get(name)
  }

  function newTab(name: string) {
    taskMap.value.set(name, [])
  }
  //弃用
  // function set(name: string, task: taskType) {
  //   if (!taskMap.has(name)) {
  //     return
  //   }
  //   taskMap.get(name).push(task)
  // }

  return {
    activeTask,
    taskMap,
    add,
    remove,
    get,
    // set,
    getTest,
    addTest,
    newTab
  }
})