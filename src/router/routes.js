const Home = () => import( /* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import( /* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import( /* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import( /* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')
const List = () => import( /* webpackChunkName: "group-jwj" */ '@/views/list/index.vue')
const Details = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/index.vue')




const routerTable = [{
        path: '/',
        redirect: '/home'
    },

    {
        path: '/home',
        component: Home,
        meta: {
            include: 'Home'
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
        path: '/list:id',
        component: List,
        name: 'List',
        meta: {
            include: 'List'
        }
    },
    {
        path: '/details:id',
        component: Details,
        name: 'Details',
        meta: {
            include: 'Details'
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
]

export default routerTable