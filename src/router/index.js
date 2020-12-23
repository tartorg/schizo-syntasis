import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/unreal-self',
    name: 'UnrealSelfRoom',
    component: () =>
      import(
        /* webpackChunkName: "unreal-self" */ '../views/UnrealSelfRoom.vue'
      ),
  },
  {
    path: '/self-emptiness',
    name: 'SelfEmptinessRoom',
    component: () =>
      import(
        /* webpackChunkName: "unreal-self" */ '../views/SelfEmptinessRoom.vue'
      ),
  },
  {
    path: '/other-negative',
    name: 'OtherNegativeRoom',
    component: () =>
      import(
        /* webpackChunkName: "unreal-self" */ '../views/OtherNegativeRoom.vue'
      ),
  },
]

const router = new VueRouter({
  routes,
})

export default router
