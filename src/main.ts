import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import globalComponent from './components/index'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import { reqLogin } from '@/api/user'
const app = createApp(App)

app.use(createPinia()).use(router).use(globalComponent).mount('#app')

reqLogin({
  username: 'admin',
  password: '111111',
})
  .then((res) => {
    console.log(res.code)
    console.log(res.data)
  })
  .catch(() => {})
