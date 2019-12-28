import Vue from 'vue'
import App from './App.vue'

import '@/utils/rem.js'

import router from '@/router'

import '@/filters'
Vue.config.productionTip = false

<<<<<<< HEAD
import { TreeSelect, Image, DropdownMenu, DropdownItem, Button, SwitchCell } from 'vant'
=======
import { Button } from 'vant';
Vue.use(Button)

>>>>>>> 5b51947bb736f55bec4a99f4bcbd83bce0358c7a

Vue.use(TreeSelect)
    .use(Image)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Button)
    .use(SwitchCell)

<<<<<<< HEAD





new Vue({
    router,
    render: h => h(App),

}).$mount('#app')
=======
}).$mount('#app')



>>>>>>> 5b51947bb736f55bec4a99f4bcbd83bce0358c7a
