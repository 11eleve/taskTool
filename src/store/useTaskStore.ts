import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task',() => {
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
})