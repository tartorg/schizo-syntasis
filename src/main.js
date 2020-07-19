import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'aframe'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-asset-item',
  'a-entity',
  'a-camera',
]

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
