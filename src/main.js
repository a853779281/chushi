import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import router from '@/router'
Vue.config.productionTip = false

import { Button } from 'vant';
Vue.use(Button)


new Vue({ 
  router,
  render: h => h(App),

}).$mount('#app')



