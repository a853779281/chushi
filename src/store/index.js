import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import accountLoginStore from '@/views/login/storeAccount'

import detailsGoods from '@/views/details/store'



const store = new Vuex.Store({
    modules: {
        detailsGoods,
        accountLoginStore

    }
})






export default store