

const Home = () => import(/* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import(/* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import(/* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import(/* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')

const Search = () => import(/* webpackChunkName: "group-jwj" */ '@/views/search/index.vue')

const Orders = () => import(/* webpackChunkName: "group-jwj" */ '@/views/orders/index.vue')

const Address = () => import(/* webpackChunkName: "group-jwj" */ '@/views/address/index.vue')
const Addaddress = () => import(/* webpackChunkName: "group-jwj" */ '@/views/address/addaddress.vue')





const routerTable=[
    {
        path:'/',
        redirect:'/home'
    },
    
    {
        path:'/home',
        component:Home,
        meta: {
            include:'Home'
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
        meta: {
            include: 'Shopcar'
        }
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
            path:'/address',
            component:Address,
            name:'address',
            meta :{
                include:'Address'
            }
        
    },
    {
        path:'/addaddress',
        component:Addaddress,
        name:'addaddress',
        meta:{
            include:'Addaddress'
        }
    }
]

export default routerTable