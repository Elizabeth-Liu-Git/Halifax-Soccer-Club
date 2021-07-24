import Vue from 'vue'
import VueRouter from 'vue-router'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import config from './aws-exports';
import VueAwesomeSwiper from 'vue-awesome-swiper';


import App from './App'
import router from './router'
import 'swiper/css/swiper.css'



Amplify.configure(config)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper,)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')