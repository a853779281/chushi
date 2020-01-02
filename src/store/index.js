import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import AddrStore from '@/views/addr/store.js'

const store=new Vuex.Store({
    AddrStore
})

export default store