<template>
  <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <!-- {{ item.content }} -->
      <Content :active="item.title" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TabPaneName } from 'element-plus'
import { useTaskStore } from '../store/useTaskStore'
import Content from './content.vue'

let { taskMap, newTab } = useTaskStore()

interface tab {
  title: string,
  name: string,
  content: object | string
}

let tabIndex = 0
const editableTabsValue = ref('0')
const editableTabs = ref<tab[]>([])

//添加
for (let [key, val] of taskMap.entries()) {
  editableTabs.value.push({
    title: key,
    name: `${tabIndex++}`,
    content: val
  })
}

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    newTab(`test${++tabIndex}`)
    editableTabs.value.push({
      title: `test${tabIndex}`,
      name: `test${tabIndex}`,
      content: []
    })
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