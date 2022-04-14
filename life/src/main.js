import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store/index.js'
import router from './router/index.js'
import axios from './plugins/axios.js'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
