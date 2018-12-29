import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './utils/font.less'
import './utils/common.css'
import './utils/rem.js'
import echarts from 'echarts'
import './utils/init.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
