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
        /* webpackChunkName: "self-emptiness" */ '../views/SelfEmptinessRoom.vue'
      ),
  },
  {
    path: '/other-negative',
    name: 'OtherNegativeRoom',
    component: () =>
      import(
        /* webpackChunkName: "other-negative" */ '../views/OtherNegativeRoom.vue'
      ),
  },
  {
    path: '/dream-fact',
    name: 'DreamFactRoom',
    component: () =>
      import(/* webpackChunkName: "dream-fact" */ '../views/DreamFactRoom.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
