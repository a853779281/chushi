import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import { Search } from 'vant'
import { Tab, Tabs } from 'vant'
import { Toast } from 'vant'


import router from '@/router'

import '@/filters'
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)

import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell } from 'vant'

Vue.use(TreeSelect)
    .use(Image)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)






new Vue({
    router,
    render: h => h(App),

}).$mount('#app')
