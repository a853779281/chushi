import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import router from '@/router'

import {
  Button
} from 'vant' //引入vant 插件

Vue.use(Button)

Vue.config.productionTip = false


new Vue({ 
  router,
  render: h => h(App),

}).$mount('#app')
