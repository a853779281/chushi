<template>
    <div class="account_login">
        <div class="account_username">
            <i class="fas fa-user account_username_left"></i>
            <input type="text" placeholder="用户名/邮箱/已验证手机" v-model= "username">
            <i class="fas fa-times account_username_right" @click= "clearUsername "></i>
        </div>
        <div>
            <div v-if= "tiggle" class="account_username">
                <i class="fas fa-lock account_username_left" ></i>
                <input type="password"  placeholder="请输入您的密码" v-model= "password">
                <i class="fas fa-eye account_username_right" @click= "passwordFlag"></i>
            </div>
            <div  v-else class="account_username">
                <i class="fas fa-lock account_username_left" ></i>
                <input type="text" placeholder="请输入您的密码" v-model= "password">
                <i class="fas fa-eye-slash account_username_right" @click= "passwordFlag"></i>
            </div>
        </div>
        <button class="btn"  @click= "ALogin()">登录</button>
        <Register></Register>
    </div>
</template>

<script>
import Register from './Register'
import request from '@/utils/request.js'
// import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            tiggle:true,
            username:'',
            password:'',
            token:''
        }
    },
    // computed:{
    //     ...mapState({
    //         person:state=>state.accountLoginStore.person
    //     })
    // },
    methods:{
        
        passwordFlag(){
            return this.tiggle=!this.tiggle
        },
        clearUsername(){
           return this.username=''
        },
        // ...mapActions(['ALogin'])
        async ALogin(){
            const result=await request({
                url:'',
                method:"post",
                headers:{
                    "Content-Type":'application/json'
                },
                data:{
                    tkoen:this.token,
                    username:this.username,
                    password:this.password,
                }
            })
            console.log(result.data)
        }
    },
    components:{
        Register
    },
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/stylesheets/border.styl'
    .account_login
        width 100%
        font-size .14rem
        color #777
        .account_username
            // width 100%
            width 90%
            height .44rem
            // padding 0  .15rem
            text-align center
            border 0 0 1px 0,#777
            margin .15rem
            display flex
            justify-content space-between
            align-items center
            .account_username_left
                font-size .14rem
                flex 38
            input 
                flex 317
                font-size .16rem
                border-top 0
                border-right 0
                border-bottom 0
                border-left 0
            .account_username_right
                flex 20
        .btn 
            width 90%
            height .4rem
            color #fff
            text-align center
            background #f11c3a
            border-top 0
            border-right 0
            border-bottom 0
            border-left 0
            margin-left .15rem
            margin-top .24rem
            box-shadow 0 .04rem .14rem #f11c3a
            border-radius .1rem
            font-size .18rem
        

</style>