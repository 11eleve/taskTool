<template>
  <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      {{ item.content }}
      <!-- 后面要改成传递参数 -->
      <Header />
      <Content />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import type { TabPaneName } from 'element-plus'
import { useTaskStore } from '../store/useTaskStore'

interface tab {
  title: string,
  name: string,
  content: object | string
}

let tabIndex = 0
const editableTabsValue = ref('0')
let { taskMap } = useTaskStore()

const editableTabs = ref<tab[]>([])

//添加
for (let [key, val] of taskMap.entries()) {
  editableTabs.value.push({
    title: key,
    name: `${tabIndex++}`,
    content: val
  })
}

const changeTask = (title: string) => {
  provide('curTask', title)
}


const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      //添加页面逻辑
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    //移除逻辑
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>