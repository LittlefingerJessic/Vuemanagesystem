import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Mainpage from '../components/Mainpage.vue'
import Myproject from '../components/Myproject.vue'
import Firstpage from '../components/Firstpage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Index,
    children: [
      { path: '/loginuser', component: Login },
      {
        path: '/mainpage',
        component: Mainpage,
        children: [
          { path: '/myproject', component: Myproject }, { path: '/first', component: Firstpage }]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
