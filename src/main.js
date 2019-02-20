import Vue from 'vue'
import App from './App.vue'
import Total from './Total.vue'
import Home from './views/Home.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Total)
}).$mount('#app')
