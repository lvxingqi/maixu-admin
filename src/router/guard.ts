import type { Router } from "vue-router"

export default function setupGuard(router: Router) {
  router.beforeEach((to, _from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login')
    } else {
      next()
    }
  })
  router.beforeEach((to,_from,next) =>{
    console.log(to);
    console.log(_from);
    console.log(next);
    next();
  })
}
