import Vue from 'vue'
import App from './App.vue'
//1
import '@/utils/rem.js'

import { Search } from 'vant'
import { Tab, Tabs } from 'vant'
import { Toast } from 'vant'
import { AddressList } from 'vant'

import { Area } from 'vant'


import router from '@/router'
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)
Vue.use(AddressList)
Vue.use(Area);


new Vue({ 
  router,
  render: h => h(App),

}).$mount('#app')
