import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import addrStore from '@/views/addr/store.js'

import accountLoginStore from '@/views/login/storeAccount'

import detailsGoods from '@/views/details/store'

import recommendStore from '@/views/recommend/store'

import searchStore from '@/views/search/store'

const store = new Vuex.Store({
    modules: {
        detailsGoods,
        accountLoginStore,
        recommendStore,
        searchStore,
        addrStore
    }
})




export default store