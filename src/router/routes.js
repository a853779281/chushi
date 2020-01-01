const Home = () => import( /* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import( /* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import( /* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import( /* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')
const List = () => import( /* webpackChunkName: "group-jwj" */ '@/views/list/index.vue')
const Details = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/index.vue')
// 
const DetailsGoods = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsGoods.vue')
const DetailsImg = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsImg.vue')
const DetailsComments = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsComments.vue')
const DetailsRecommend = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsRecommend.vue')



const Collect = () => import( /* webpackChunkName:"group-jwj" */ '@/views/collect/index.vue')

const Footprint = () => import( /* webpackChunkName:"group-jwj" */ '@/views/footprint/index.vue')

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
    // 列表路由
    {
        path: '/list:id',
        component: List,
        name: 'List',
        meta: {
            include: 'List'
        },

    },
    // 详情页路由
    {
        path: '/details:id',
        component: Details,
        name: 'Details',
        meta: {
            include: 'Details'
        },
        redirect: '/details:id/detailsgoods',
        children: [{
                path: 'detailsgoods',
                component: DetailsGoods,
                name: 'DetailsGoods',
                meta: {
                    include: 'DetailsGoods'
                }
            },
            {
                path: 'detailsimg',
                component: DetailsImg,
                name: 'DetailsImg',
                meta: {
                    include: 'DetailsImg'
                }
            },
            {
                path: 'detailscomments',
                component: DetailsComments,
                name: 'DetailsComments',
                meta: {
                    include: 'DetailsComments'
                }
            },
            {
                path: 'detailsrecommend',
                component: DetailsRecommend,
                name: 'DetailsRecommend',
                meta: {
                    include: 'DetailsRecommend'
                }
            },




        ]


    },
    {
        path: '/shopcar',
        component: Shopcar,
        name: 'Shopcar',
        meta: {
            include: 'Shopcar'
        }
    },


    // 个人中心
    {
        path: '/mine',
        component: Mine,
        meta: {
            include: 'Mine'
        }
    },
    // 商品/店铺收藏
    {
        path: '/collect',
        component: Collect,
        meta: {
            include: 'collect'
        },
        children: [{
                path: 'goods',
                meta: {
                    include: 'goods'
                },
                name: 'goods'
            },
            {
                path: 'shop',
                meta: {
                    include: 'shop'
                },
                name: 'shop'
            }
        ],
    },
    // 我的足迹
    {
        path: '/footprint',
        component: Footprint,
        meta: {
            include: 'footprint'
        },
    }
]

export default routerTable