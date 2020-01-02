import Vue from 'vue'
import Vuex from 'vuex'
import addrStore from '@/views/addr/store.js'

Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        addrStore
    }
})

export default store