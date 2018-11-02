import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Register from '@/pages/Register/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'
import Create from '@/pages/Create/template.vue'
import Store from '../store'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/my',
      component: My,
      meta: {requiresAuth: true}
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/create',
      component: Create,
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    Store.dispatch('checkLogin').then(isLogin => {
      if(!isLogin){
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }else{
        next()
      }
    })
  }else{
    next()
  }
})

export default router
