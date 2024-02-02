import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import globalComponent from './components/index'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import request from '@/utils/request'
const app = createApp(App)

app.use(createPinia()).use(router).use(globalComponent).mount('#app')
request({
  url: '/user/login',
  method: 'get',
  data: {
    name: '123',
    age: 12,
  },
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
