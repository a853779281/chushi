import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
<<<<<<< HEAD
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
=======

import addrStore from '@/views/addr/store.js'

const store=new Vuex.Store({
    modules:{
        addrStore
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184
    }
})

export default store