import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import '@/filters'

import store from "@/store"

import router from '@/router'


Vue.config.productionTip = false

import {
    TreeSelect,
    Image,
    DropdownMenu,
    DropdownItem,
    Button,
    SwitchCell,
    DatetimePicker,
    Area,
    AddressEdit,
    Search,
    Tab,
    Tabs,
    Toast,
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
    Checkbox,
    Card,
    SubmitBar,
    SwipeCell,
    Cell,
    CellGroup,
    Field,
    AddressList
} from 'vant'



Vue.use(TreeSelect)
    .use(Image)
    .use(Toast)
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
    .use(Checkbox)
    .use(Card)
    .use(SubmitBar)
    .use(SwipeCell)
    .use(Area)
    .use(Cell)
    .use(CellGroup)
    .use(Field)
    .use(DatetimePicker)
    .use(AddressEdit)
    .use(Search)
    .use(AddressList)
    .use(Tab)
    .use(Tabs)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')