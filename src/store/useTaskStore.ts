import { defineStore } from 'pinia'
import { taskType } from '../util/taskType'

export const useTaskStore = defineStore('task', () => {
  let taskMap = new Map()

  function add(name: string) {
    if (taskMap.has(name)) {
      return
    }
    taskMap.set(name, [])
  }

  function remove(name: string) {
    if (!taskMap.has(name)) {
      return
    }
    taskMap.delete(name)
  }

  function get(name: string) {
    if (!taskMap.has(name)) {
      return
    }
    return taskMap.get(name)
  }

  function set(name: string, task: taskType) {
    if (!taskMap.has(name)) {
      return
    }
    taskMap.get(name).push(task)
  }

  return {
    add,
    remove,
    get,
    set
  }
})