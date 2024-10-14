import { defineStore } from 'pinia'
import { taskType } from '../util/taskType'

export const useTaskStore = defineStore('task', () => {

  let activeTask = ''
  let taskMap = new Map()

  //测试数据
  taskMap.set('test', [])
  taskMap.get('test').push([
    {title: "创建项目", description: "step1", finished: false},
    {title: "加载项目", description: "step2", finished: false}, 
    {title: "运行项目", description: "step3", finished: false},
    {title: "结束项目", description: "step4", finished: false}
  ])

  taskMap.set('test1', [])
  taskMap.get('test1').push([
    {title: "创建", description: "step11", finished: false},
    {title: "加载", description: "step12", finished: false}, 
    {title: "运行", description: "step13", finished: false},
    {title: "结束", description: "step14", finished: false}
  ])

  function add() {
    if (taskMap.has(activeTask)) {
      return
    }
    taskMap.set(activeTask, [])
  }

  function addTest(name: string, node: string) {
    if (taskMap.has(name)) {
      return
    }
    taskMap.set(name, [node])
  }

  function remove(name: string) {
    if (!taskMap.has(name)) {
      return
    }
    taskMap.delete(name)
  }

  function get() {
    if (!taskMap.has(activeTask)) {
      return
    }
    return taskMap.get(activeTask)
  }

  function getTest(name: string) {
    if (!taskMap.has(name)) {
      return
    }
    return taskMap.get(name)
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
    addTest
  }
})