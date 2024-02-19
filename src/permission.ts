// 路由鉴权
import router from '@/router'
import { start, close } from '@/router/nprogress'
import useUserStore from '@/stores/modules/user'
import pinia from '@/stores'
import setting from '@/setting'

const userStore = useUserStore(pinia)

router.beforeEach(async (to, from, next) => {
  /*
      to: Route: 即将要进入的目标 路由对象
      from: Route: 当前导航正要离开的路由
      next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
     */

  // 访问某一个路由前的守卫

  // 开启进度条
  start()
  document.title = setting.title + ' - ' + to.meta.title
  const token = userStore.token
  const username = userStore.username

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        userStore
          .userInfo()
          .then(() => {
            next()
          })
          .catch(() => {
            next({ path: '/login' })
          })
      }
    }
  } else {
    await userStore.userLogout()

    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.path },
      })
    }
  }

  // 放行
  next()
})

router.afterEach((to, from, failure) => {
  /*
      to : Route: 即将要进入的目标 路由对象
      from : Route: 当前导航正要离开的路由
      failure : Error: 导航被终止的原因
     */

  // 访问某一个路由后的守卫

  // 关闭进度条
  close()
})
