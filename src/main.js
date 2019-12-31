import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

// 引入store
import store from '@/store/index.js'



import router from '@/router'

import '@/filters'
Vue.config.productionTip = false

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
    GoodsActionButton
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





new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')