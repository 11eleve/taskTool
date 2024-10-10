import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
// app.mount('#app').$nextTick(() => {
//   // Use contextBridge
//   window.ipcRenderer.on('main-process-message', (_event, message) => {
//     console.log(message)
//   })
// })




