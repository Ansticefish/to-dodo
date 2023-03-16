import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import shared scss
import "@/scss/theme.scss"
import axios from 'axios'
// set up firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAm8ni1uX1XdmcwN4VG3y60atR7VFfPsa0",
  authDomain: "to-dodo-6ceb2.firebaseapp.com",
  projectId: "to-dodo-6ceb2",
  storageBucket: "to-dodo-6ceb2.appspot.com",
  messagingSenderId: "981751867977",
  appId: "1:981751867977:web:9d6338d4b742de26aeed98",
  measurementId: "G-GZH1FGRGX1"
};
const firebase = initializeApp(firebaseConfig);

Vue.config.productionTip = false

// declare global variables
Vue.prototype.$theme = 'light'

new Vue({
  router,
  store,
  axios,
  firebase,
  render: h => h(App)
}).$mount('#app')
