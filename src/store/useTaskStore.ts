import { defineStore } from 'pinia'
import { taskType } from '../util/taskType'

export const useTaskStore = defineStore('task', () => {

  let activeTask = ''

  let taskMap = new Map()

  function add() {
    if (taskMap.has(activeTask)) {
      return
    }
    taskMap.set(activeTask, [])
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

  function set(name: string, task: taskType) {
    if (!taskMap.has(name)) {
      return
    }
    taskMap.get(name).push(task)
  }

  return {
    activeTask,
    add,
    remove,
    get,
    set
  }
})