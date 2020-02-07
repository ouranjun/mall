import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/404.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
