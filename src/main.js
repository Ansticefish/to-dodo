import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import shared scss
import "@/scss/shared.scss"

Vue.config.productionTip = false

// declare global variables
Vue.prototype.$theme = 'light'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
