import Vue from 'vue'

import Vuex from 'vuex'

import accountLoginStore from '@/views/login/storeAccount'
Vue.use(Vuex)

const store= new Vuex.Store({
    modules:{
        accountLoginStore,   
    }
})

export default store