import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'
import store from "@/store"

import router from '@/router'

import '@/filters'
Vue.config.productionTip = false

import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell,AddressList,Toast,AddressEdit,Search,Tab, Tabs,Area  } from 'vant'

Vue.use(TreeSelect)
    .use(Image)
    .use(Toast)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)
    .use(AddressList)
    .use(AddressEdit )
    .use(Tab)
    .use(Tabs)
    .use(Search)
    .use(Area)





new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')