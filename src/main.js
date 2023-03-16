import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import shared scss
import "@/scss/theme.scss"
import axios from 'axios'

Vue.config.productionTip = false

// declare global variables
Vue.prototype.$theme = 'light'

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
