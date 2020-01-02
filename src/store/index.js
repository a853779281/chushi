import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import accountLoginStore from '@/views/login/storeAccount'

import detailsGoods from '@/views/details/store'

import recommendStore from '@/views/recommend/store'

import searchStore from '@/views/search/store'

const store = new Vuex.Store({
    modules: {
        detailsGoods,
        accountLoginStore,
        recommendStore,
        searchStore
    }
})






export default store