import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 history 模式
  routes,
})

// 路由守卫（可选）
import setupGuard from './guard'
setupGuard(router)

export default router
