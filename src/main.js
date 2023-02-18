import Vue from 'vue'
import "swiper/dist/css/swiper.min.css"

import App from './App.vue'
import router from './router'
import store from './store'
import LoginHeader from './components/LoginHeader.vue'
import Nav from './components/Nav.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'



Vue.use(ElementUI)
Vue.component('Nav', Nav)
Vue.component('LoginHeader', LoginHeader)
Vue.component('d-player',VueDPlayer)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
