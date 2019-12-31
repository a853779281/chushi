

const Home = () => import(/* webpackChunkName: "group-jwj" */ '@/views/home/index.vue')

const Category = () => import(/* webpackChunkName: "group-jwj" */ '@/views/category/index.vue')


const Shopcar = () => import(/* webpackChunkName: "group-jwj" */ '@/views/shopcar/index.vue')


const Mine = () => import(/* webpackChunkName: "group-jwj" */ '@/views/mine/index.vue')


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
        path: '/mine',
        component: Mine,
        name:'mine',
        meta: {
            include: 'Mine'
        }
    },
    {
        path: '/login',
        redirect:'/login/account',
        component: Login,
        name:'login',
        meta: {
            include: 'Login'
        },
        children:[
            {
                path:'/login/account',
                component: AccountLogin,
                name:'AccountLogin',
                meta: {
                    include: 'AccountLogin'
                },
            },
            {
                path:'/login/phone',
                component: PhoneLogin,
                name:'PhoneLogin',
                meta: {
                    include: 'PhoneLogin'
                },
            },
           
        ]
    },
    {
        path: '/register',
        component: Register,
        name:'register',
        meta: {
            include: 'Register'
        }
    },
    {
        path: '/forgetPassword',
        component: ForgetPassword,
        name:'forgetPassword',
        meta: {
            include: 'ForgetPassword'
        }
    },
    {
        path: '/uCenter',
        component: UCenter,
        name:'uCenter',
        meta: {
            include: 'UCenter'
        }
    },
]

export default routerTable