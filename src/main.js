import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
