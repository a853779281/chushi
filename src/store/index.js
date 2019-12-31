import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import detailsGoods from '@/views/details/store'



const store = new Vuex.Store({
    modules: {
        detailsGoods
    }
})






export default store