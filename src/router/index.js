import Vue from 'vue'
import VueRouter from 'vue-router'
import routerTable from './routes'
Vue.use( VueRouter )



const router = new VueRouter({
    mode: 'history',
    routes: routerTable//routes
})

export default router