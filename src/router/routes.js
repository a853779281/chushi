

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


const Login = () => import(/* webpackChunkName: "group-jwj" */ '@/views/login/index.vue')


const AccountLogin = () => import(/* webpackChunkName: "group-jwj" */ '@/views/login/AccountLogin.vue')


const PhoneLogin = () => import(/* webpackChunkName: "group-jwj" */ '@/views/login/PhoneLogin.vue')


const Register = () => import(/* webpackChunkName: "group-jwj" */ '@/views/register/index.vue')


const ForgetPassword = () => import(/* webpackChunkName: "group-jwj" */ '@/views/forgetPassword/index.vue')


const UCenter = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/index.vue')



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
        name:'category',
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
        name:'mine',
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
    }
]

export default routerTable