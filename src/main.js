import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import { Search } from 'vant'
import { Tab, Tabs } from 'vant'
// 引入store
import store from '@/store/index.js'

import router from '@/router'

import '@/filters'
Vue.config.productionTip = false
Vue.use(Search)
Vue.use(Tab).use(Tabs)

import {
    TreeSelect,
    Image,
    DropdownMenu,
    DropdownItem,
    Button,
    SwitchCell,
    Icon,
    Swipe,
    SwipeItem,
    Tag,
    Popup,
    Sku,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    stepper,
    Toast,
    Checkbox,
    Card,
    SubmitBar
} from 'vant'

Vue.use(TreeSelect)
    .use(Image)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Tag)
    .use(Popup)
    .use(Sku)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(stepper)
    .use(Toast)
    .use(Checkbox)
    .use(Card)
    .use(SubmitBar)





new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')