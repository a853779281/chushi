import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'
<<<<<<< HEAD
import '@/filters'


import {
    AddressList
} from 'vant'

import {
    Area
} from 'vant'
=======
import store from "@/store"
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184

import router from '@/router'
import store from '@/store'

import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell ,DatetimePicker, Area,AddressEdit,Search,Tab, Tabs,Toast} from 'vant'



Vue.config.productionTip = false

<<<<<<< HEAD
<<<<<<< HEAD
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
    SubmitBar,
    SwipeCell,
    Cell,
    CellGroup,
    Field
} from 'vant'
=======

>>>>>>> 67a32b6008d9d1a8c710358b21c25debca769b4e
=======
import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell,AddressList,Toast,AddressEdit,Search,Tab, Tabs,Area  } from 'vant'
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184

Vue.use(TreeSelect)
    .use(Image)
    .use(Toast)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)
<<<<<<< HEAD
<<<<<<< HEAD
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


=======
    .use(DatetimePicker)
    .use(Area)
    .use(AddressEdit)
    .use(Tab).use(Tabs).use(Toast)
    .use(Search)
>>>>>>> 67a32b6008d9d1a8c710358b21c25debca769b4e


=======
    .use(AddressList)
    .use(AddressEdit )
    .use(Tab)
    .use(Tabs)
    .use(Search)
    .use(Area)
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')