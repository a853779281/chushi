import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'
import '@/filters'


import router from '@/router'
import store from '@/store'

import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell ,DatetimePicker, Area,AddressEdit,Search,Tab, Tabs,Toast} from 'vant'



Vue.config.productionTip = false



Vue.use(TreeSelect)
    .use(Image)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)
    .use(DatetimePicker)
    .use(Area)
    .use(AddressEdit)
    .use(Tab).use(Tabs).use(Toast)
    .use(Search)



new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')