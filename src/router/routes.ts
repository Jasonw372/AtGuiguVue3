import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: readonly RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: [],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Any',
    redirect: '/404',
  },
]
