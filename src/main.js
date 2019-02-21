import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
=======
import Total from './Total.vue'
>>>>>>> 54c962170046ffa22dcaa66877f2ffaa1c475905
import Home from './views/Home.vue'
import './plugins/element.js'
import router from './router'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
  render: h => h(Home)
=======
  render: h => h(Total)
>>>>>>> 54c962170046ffa22dcaa66877f2ffaa1c475905
}).$mount('#app')
