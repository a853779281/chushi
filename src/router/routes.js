const Home = () => import( /* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')
const NewGoodRecommend = () => import( /* webpackChunkName: "group-jwj" */ '@/views/recommend/index.vue')

const Category = () => import( /* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import( /* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')
const CommitOrder = () => import( /* webpackChunkName: "group-jwj" */ '@/views/orders/CommitOrder.vue')

const Mine = () => import( /* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')
const List = () => import( /* webpackChunkName: "group-jwj" */ '@/views/list/index.vue')
const Details = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/index.vue')
// 
const DetailsGoods = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsGoods.vue')
const DetailsImg = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsImg.vue')
const DetailsComments = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsComments.vue')
const DetailsRecommend = () => import( /* webpackChunkName: "group-jwj" */ '@/views/details/DetailsRecommend.vue')

const Search = () => import( /* webpackChunkName: "group-jwj" */ '@/views/search/index.vue')
const SearchList = () => import( /* webpackChunkName: "group-jwj" */ '@/views/search/SearchList.vue')

const Orders = () => import( /* webpackChunkName: "group-jwj" */ '@/views/orders/index.vue')
const Collect = () => import( /* webpackChunkName:"group-jwj" */ '@/views/collect/index.vue')

const Footprint = () => import( /* webpackChunkName:"group-jwj" */ '@/views/footprint/index.vue')

const Login = () => import( /* webpackChunkName: "group-jwj" */ '@/views/login/index.vue')


const AccountLogin = () => import( /* webpackChunkName: "group-jwj" */ '@/views/login/AccountLogin.vue')

// const Address = () => import( /* webpackChunkName: "group-jwj" */ '@/views/address/index.vue')
// const Addaddress = () => import( /* webpackChunkName: "group-jwj" */ '@/views/address/addaddress.vue')


const PhoneLogin = () => import( /* webpackChunkName: "group-jwj" */ '@/views/login/PhoneLogin.vue')


const Register = () => import( /* webpackChunkName: "group-jwj" */ '@/views/register/index.vue')

const Deliver = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/deliver.vue')

const ForgetPassword = () => import( /* webpackChunkName: "group-jwj" */ '@/views/forgetPassword/index.vue')
const Deposit = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/deposit.vue')

const Doing = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/doing.vue')

const Done = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/done.vue')

const Close = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/close.vue')

const WaitDeliver = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/waitDeliver.vue')

const WaitPay = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/waitPay.vue')

const AlreadyDeliver = () => import( /* webpackChunkName: "group-jwj" */ '@/views/deliver/alreadyDeliver.vue')

const Addr = () => import( /* webpackChunkName: "group-jwj" */ '@/views/addr/index.vue')



const UCenter = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/index.vue')
const AccountInformation = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/AccountInformation.vue')
const Photo = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/Photo.vue')
const Safe = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/Safe.vue')
const Modify = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/Modify.vue')
const Binding = () => import(/* webpackChunkName: "group-jwj" */ '@/views/uCenter/Binding.vue')


const routerTable = [{
        path: '/',
        redirect: '/home'
    },

    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            include: 'Home'
        }
    },
    { //首页的新品推荐
        path: '/recommend',
        component: NewGoodRecommend,
        name: 'recommend',
        meta: {
            include: 'NewGoodRecommend'
        }
    },
    // 列表路由
    {
        path: '/addr',
        component: Addr,

    },
    {
        path: '/deliver',
        component: Deliver,
        redirect: '/deliver/doing/waitdeliver',
        children: [{
                component: Done,
                path: 'done',
                name: 'done',
            },
            {
                component: Doing,
                path: 'doing',
                name: 'doing',
                children: [{
                        component: WaitDeliver,
                        path: 'waitdeliver',
                        name: 'waitdeliver'
                    },
                    {
                        component: WaitPay,
                        path: 'waitpay',
                        name: 'waitpay'
                    },
                    {
                        component: AlreadyDeliver,
                        path: 'alreadydeliver',
                        name: 'alreadydeliver'
                    }
                ]
            },
            {
                component: Close,
                path: 'close',
                name: 'close'
            }
        ]
    },
    {
        path: '/deposit',
        component: Deposit,
    },
    {
        path: '/list:id',
        component: List,
        name: 'List',
        meta: {
            include: 'List'
        }
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
        path: '/category',
        component: Category,
        name: 'category',
        meta: {
            include: 'Category'
        }
    },
    {
        path: '/shopcar',
        component: Shopcar,
        name: 'shopcar',
        meta: {
            include: 'Shopcar'
        }
    },
    {
        path: '/CommitOrder',
        component: CommitOrder,
        name: 'CommitOrder',
        meta: {
            include: 'CommitOrder'
        }
    },
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
        ]
    },
    {
        path: '/mine',
        component: Mine,
        name: 'mine',
        meta: {
            include: 'Mine'
        }
    },
    {
        path: '/search',
        component: Search,
        name: 'search',
        meta: {
            include: 'Search'
        }
    },
    {
        path: '/searchList',
        component: SearchList,
        name: 'searchList',
        meta: {
            include: 'SearchList'
        }
    },
    {
        path: '/footprint',
        component: Footprint,
        meta: {
            include: 'footprint'
        }
    },
    {
        path: '/orders',
        component: Orders,
        name: 'orders',
        meta: {
            include: 'Orders'
        }
    },
    {
        path: '/login',
        redirect: '/login/account',
        component: Login,
        name: 'login',
        meta: {
            include: 'Login'
        },
        children: [{
                path: '/login/account',
                component: AccountLogin,
                name: 'AccountLogin',
                meta: {
                    include: 'AccountLogin'
                },
            },
            {
                path: '/login/phone',
                component: PhoneLogin,
                name: 'PhoneLogin',
                meta: {
                    include: 'PhoneLogin'
                },
            },

        ]
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            include: 'Register'
        }
    },
    {
        path: '/forgetPassword',
        component: ForgetPassword,
        name: 'forgetPassword',
        meta: {
            include: 'ForgetPassword'
        }
    },
    {
        path: '/uCenter',
        component: UCenter,
        name: 'uCenter',
        meta: {
            include: 'UCenter'
        },
        children:[
            {
                path:'/uCenter/accountInformation',
                component:AccountInformation,
                name:'accountInformation',
                meta:{
                   include: 'accountInformation'
                }
            },
            {
                path:'/uCenter/photo',
                component:Photo,
                name:'photo',
                meta:{
                   include: 'Photo'
                }
            },
            {
                path:'/uCenter/safe',
                component:Safe,
                name:'safe',
                meta:{
                   include: 'Safe'
                }
            },
            {
                path:'/uCenter/modify',
                component:Modify,
                name:'modify',
                meta:{
                   include: 'Modify'
                }
            },
            {
                path:'/uCenter/binding',
                component:Binding,
                name:'binding',
                meta:{
                   include: 'Binding'
                }
            },
        ]
    },


    // {
    //     path: '/address',
    //     component: Address,
    //     name: 'address',
    //     meta: {
    //         include: 'Address'
    //     }

    // },
    // {
    //     path: '/addaddress',
    //     component: Addaddress,
    //     name: 'addaddress',
    //     meta: {
    //         include: 'Addaddress'
    //     }
    // }
]

export default routerTable