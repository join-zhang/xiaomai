import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import * as API from '@/api'

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$API = API
  }
}).$mount('#app')
