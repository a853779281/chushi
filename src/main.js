import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'
import '@/filters'

import router from '@/router'
import store from '@/store'




Vue.config.productionTip = false

import {
    Area,
    AddressList,
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
    SubmitBar,
    SwipeCell,
    Cell,
    CellGroup,
    Field
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
    .use(SwipeCell)
    .use(AddressList)
    .use(Area)
    .use(Cell)
    .use(CellGroup)
    .use(Field)





new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')