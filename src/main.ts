import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import globalComponent from './components/index'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import pinia from '@/stores'

const app = createApp(App)

app.use(pinia).use(router)
// 导入路由鉴权
import './permission'

app.use(globalComponent).mount('#app')
