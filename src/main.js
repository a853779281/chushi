import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import '@/filters'




// 引入store
import store from '@/store/index.js'

import router from '@/router'


Vue.config.productionTip = false

import {
    Area,
    TreeSelect,
    Image,
    DropdownMenu,
    DropdownItem,
    Button,
    SwitchCell,
    DatetimePicker,
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
    AddressList,
    CouponCell,
    CouponList
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
    .use(CouponCell)
    .use(CouponList)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')