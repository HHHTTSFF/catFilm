import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import Home from './components/Home.vue'
import Mine from './components/Mine.vue'
import Task from './components/Task.vue'
Vue.use(VueRouter)
Vue.use(vant)
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect:'/home'
    },
    {
      path: "/home",
      component:Home,
    },
    {
      path: "/mine",
      component:Mine
    },
    {
      path: "/task",
      component:Task,
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')
