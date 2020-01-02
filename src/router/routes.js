

const Home = () => import(/* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import(/* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import(/* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import(/* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')

const Search = () => import(/* webpackChunkName: "group-jwj" */ '@/views/search/index.vue')

const Orders = () => import(/* webpackChunkName: "group-jwj" */ '@/views/orders/index.vue')

const List = () => import(/* webpackChunkName: "group-jwj" */ '@/views/list/index.vue')

const Footprint = () => import(/* webpackChunkName: "group-jwj" */ '@/views/footprint/index.vue')

const Collect = () => import(/* webpackChunkName: "group-jwj" */ '@/views/collect/index.vue')

const Details = () => import(/* webpackChunkName: "group-jwj" */ '@/views/details/index.vue')

const Deliver = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/deliver.vue')

const Deposit = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/deposit.vue')

const Doing = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/doing.vue')

const Done = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/done.vue')

const Close = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/close.vue')

const WaitDeliver = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/waitDeliver.vue')

const WaitPay = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/waitPay.vue')

const AlreadyDeliver = () => import(/* webpackChunkName: "group-jwj" */ '@/views/deliver/alreadyDeliver.vue')

const Addr = () => import(/* webpackChunkName: "group-jwj" */ '@/views/addr/index.vue')

const EditAddr = () => import(/* webpackChunkName: "group-jwj" */ '@/views/addr/editAddr.vue')

const UserSetting = () => import(/* webpackChunkName: "group-jwj" */ '@/views/userSetting/index.vue')


const routerTable=[
    {
        path:'/',
        redirect:'/home'
    },
    
    {
        path:'/home',
        component:Home,
        name:'home',
        meta: {
            include:'Home'
        }
    },
    {
        path:'/addr',
        component:Addr,
    },
    {
        component:EditAddr,
        path:'/editaddr',
        name:'editaddr'
    },
    {
        path:'/deliver',
        component:Deliver,
        redirect:'/deliver/doing/waitdeliver',
        children:[
            {
                component:Done,
                path:'done',
                name:'done',
            },
            {
                component:Doing,
                path:'doing',
                name:'doing',
                children:[
                    {
                        component:WaitDeliver,
                        path:'waitdeliver',
                        name:'waitdeliver'
                    },
                    {
                        component:WaitPay,
                        path:'waitpay',
                        name:'waitpay'
                    },
                    {
                        component:AlreadyDeliver,
                        path:'alreadydeliver',
                        name:'alreadydeliver'
                    }
                ]
            },
            {
                component:Close,
                path:'close',
                name:'close'
            }
        ]
    },
    {
        path:'/deposit',
        component:Deposit,
    },
    {
        path: 'list:id',
        component: List,
        name: 'List',
        meta: {
            include: 'List'
        }
    },
    {
        path: 'details:id',
        component: Details,
        name: 'Details',
        meta: {
            include: 'Details'
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            include: 'Category'
        }
    },
    {
        path: '/shopcar',
        component: Shopcar,
        name:'shopcar',
        meta: {
            include: 'Shopcar'
        }
    },
    {
        path:'/collect',
        component:Collect,
        meta:{
            include:'collect'
        },
        children:[
            {
                path:'goods',
                meta:{
                    include:'goods'
                },
                name:'goods'
            },
            {
                path:'shop',
                meta:{
                    include:'shop'
                },
                name:'shop'
            }
        ]
    },
    {
        path: '/mine',
        component: Mine,
        meta: {
            include: 'Mine'
        }
    },
    {
        path:'/search',
        component:Search,
        name:'search',
        meta :{
            include:'Search'
        }
    },{
        path:'/footprint',
        component:Footprint,
        meta:{
            include:'footprint'
        }
    },
    {
        path:'/orders',
        component:Orders,
        name:'orders',
        meta :{
            include:'Orders'
        }
    },
    {
        path:'/setting',
        component:UserSetting
    }
]

export default routerTable