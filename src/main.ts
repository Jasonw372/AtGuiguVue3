import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import globalComponent from './components/index'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import axios from 'axios'
const app = createApp(App)

app.use(createPinia()).use(router).use(globalComponent).mount('#app')
console.log(
  await axios.post('/api/user/login', {
    username: 'admin',
    password: '111111',
  }),
)
