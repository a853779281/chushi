import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import { Search } from 'vant'
import { Tab, Tabs } from 'vant'
import { Toast } from 'vant'


import router from '@/router'
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)


new Vue({ 
  router,
  render: h => h(App),

}).$mount('#app')
