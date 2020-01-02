import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import addrStore from '@/views/addr/store.js'

const store=new Vuex.Store({
    modules:{
        addrStore
    }
})

export default store