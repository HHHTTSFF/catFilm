import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import Home from './components/Home.vue'
import Mine from './components/Mine.vue'
import Task from './components/Task.vue'
import Tv from './components/Tv.vue'
import Login from './components/Login.vue'
import Place from './components/Place'
import Detail from './components/Detail.vue'
// import Place from './components/Place.Vue'
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
    },
    {
      path: "/tv",
      component:Tv,
    },
    {
      path: '/login',
      component:Login,
    },
    {
      path: '/place',
      component:Place,
    },
    {
      path: '/detail/:id',
      component:Detail
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')
