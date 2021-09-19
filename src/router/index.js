import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import child from '../components/child.vue'
import HelloWorld from '../components/HelloWorld.vue'
import dropdown from '../components/dropdown.vue'
import weather from '../components/weather.vue'


 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component:HelloWorld
  },
  {
    path: '/Home',
    name: 'Home',
    component:Home
  },
  {
    path: '/child',
    name: 'child',
    component:child
  },
  {
    path: '/weather',
    name: 'weather',
    component:weather
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component:dropdown
  },
 
  
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
