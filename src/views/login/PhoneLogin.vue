<template>
     <div class="account_login">
        <div class="account_username">
            <i class="fas fa-user account_username_left"></i>
            <input type="number" placeholder="请输入手机号" v-model= "phone">
            <i class="fas fa-times account_username_right" @click= "clearPhone "></i>
        </div>
        <div  class="account_username">
            <i class="fas fa-lock account_username_left" ></i>
            <input type="text"  placeholder="验证码" v-model= "img_code">
            <span class="account_username_right img_code">验证码</span>
        </div>
        <div  class="account_username">
            <i class="fas fa-lock account_username_left" ></i>
            <input type="text"  placeholder="请输入手机验证码" v-model= "phone_code">
            <span class="account_username_right phone_code">验证码</span>
        </div>
        <button class="btn">登录</button>
        <Register></Register>
    </div>
</template>
<script>
    import Register from './Register'

    import  {mapState,mapActions} from 'vuex'

export default {
    data(){
        return {
            phone:'',
            img_code:'',
            phone_code:''
        }
    },
    computed:{
        ...mapState({
            person:state=>state.phoneLoginStore.person
        })
    },
    methods:{
        clearPhone(){
            this.phone=''
        },
         ...mapActions(['PLogin'])
    },
    components:{
        Register
    }
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
                flex 257
                font-size .16rem
                border-top 0
                border-right 0
                border-bottom 0
                border-left 0
            .account_username_right
                flex 80
            .img_code
                width .27rem
            .phone_code
                height .38rem
                background #dddddd
                color #777777
                line-height .38rem
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