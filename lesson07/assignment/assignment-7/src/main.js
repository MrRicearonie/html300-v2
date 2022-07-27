import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

import './main.scss'

Vue.use(BootstrapVue)
Vue.component("NavBar", require('./components/NavBar.vue').default); // Navgar

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
