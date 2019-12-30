

const Home = () => import(/* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import(/* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import(/* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import(/* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')

const Search = () => import(/* webpackChunkName: "group-jwj" */ '@/views/search/index.vue')





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
    }
]

export default routerTable