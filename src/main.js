import Vue from 'vue'
import App from './App.vue'
import Total from './Total.vue'
import Home from './components/Home.vue'

import Test from './Test.vue'
import './plugins/element.js'
import router from './router'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Total)
}).$mount('#app')
