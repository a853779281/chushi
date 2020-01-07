<template>
     <div class="account_login">
         <!-- 手机号 -->
        <div class="account_username">
            <i class="fas fa-user account_username_left"></i>
            <input type="number" placeholder="请输入手机号" v-model= "phone">
            <i class="fas fa-times account_username_right" @click= "clearPhone "></i>
        </div>
        <!-- 密码 -->
        <div  class="account_username">
            <i class="fas fa-lock account_username_left" ></i>
            <input type="text"  placeholder="验证码" v-model= "img_code">
            <span class="account_username_right img_code" @click= "imgCode">{{str ||'验证码'}}</span>
        </div>
        <!-- 手机验证码 -->
        <div  class="account_username">
            <i class="fas fa-lock account_username_left" ></i>
            <input type="text"  placeholder="请输入手机验证码" v-model= "code">
            <span
             class="account_username_right phone_code"
              @click= "phoneCode"
              >{{flag? '点击获取验证码':'此验证码'+count+'秒失效'}}</span>
            
        </div>
        <!-- 点击登录 -->
        <button class="btn" @click="PLogin">登录</button>
        <!-- 注册和忘记密码组件 -->
        <Register></Register>
    </div>
</template>
<script>
    import Register from './Register'
    import request from '@/utils/request.js'
    import {setCookie} from '@/utils/cookie.js'
    // import  {mapState,mapActions} from 'vuex'

export default {
    data(){
        return {
            phone:'',
            img_code:'',
            str:'',
            code:'',
            count:60,
            flag:true,
        }
    },
    // computed:{
    //     ...mapState({
    //         person:state=>state.phoneLoginStore.person
    //     })
    // },
    methods:{
        clearPhone(){
            this.phone=''
        },
        //  ...mapActions(['PLogin'])

        // 图片验证码
        imgCode(){
          let str='',
               a,b,c,d 
              for (var i=1 ;i<5;i++){
                a=String.fromCharCode(Math.round(Math.random()*(65-90)+90)),
                b=String.fromCharCode(Math.round(Math.random()*(48-57)+57)),
                c=String.fromCharCode(Math.round(Math.random()*(97-122)+122)),
                d=Math.round(Math.random()*(1-3)+3)
                if(d==1){
                    str+=a
                }else if(d==2){
                    str+=b
                }else if(d==3){
                    str+=c
                }
            }
            this.str=str
        },
        // 手机验证码和发送请求
        async phoneCode(){
            let count=60,
                timer
                timer= setInterval(() => {
                    count--;
                    // console.log(count)
                    this.count=count
                    this.flag=false
                    if(count==0){
                        clearInterval(timer)
                        this.flag =true
                    }
                }, 1000);
            // const result=await request({
            //     url:'',
            //     method:'post',
            //     data:{
            //         phone:this.phone
            //     },
            //     headers:{
            //         "Content-Type":'application/json'
            //     }
            // })
            // console.log(result.data)
        },
        //  请求登录
        async PLogin(){
            const{img_code,str,phone,code}=this
            if(img_code==str && phone && code){
                const result=await request({
                    url:'http://localhost:3000/login',
                    method:'post',
                    data:{
                        phone,
                        code
                    },
                    headers:{
                        "Content-Type":'application/json'
                    }
                })
                if(result.data.state ){
                    setCookie('username',phone)
                    alert('登录成功')
                    this.$router.push('mine')
                }else{
                    alert('账号或密码错误')
                }
            }else{
                alert('您填的验证码错误')
            }
           
        }
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
                background #dddddd
                line-height .38rem
                color #777777
            .phone_code
                flex 150
                height .38rem
                background #dddddd
                color #777777
                // line-height .38rem
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