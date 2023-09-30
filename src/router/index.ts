import { createRouter, createWebHistory } from 'vue-router'
import AccountMain from '../components/accountMain.vue'
import UserMain from '../components/userMain.vue'
import AccountSetting from '../components/accountSetting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccountMain
    },
    {
      path: '/user',
      name: 'usermain',
      component: UserMain
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/UserMain.vue')
    },{
      path: '/accountsetting',
      name: 'accountsetting',
      component: AccountSetting
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/UserMain.vue')
    }
  ]
})

export default router
