<template>
    <div class="register">
        <!-- 设置密码能否看见 -->
        <div class="register_username" v-if= "tiggle">
            <label for="" class="register_username_left">设置密码</label>
            <input type="password" placeholder="组合，4-20个字符" v-model= "password" 
            @keyup= "passwordTest">
            <i class="fas fa-check-circle green" v-show= 'flag'></i>
            <i class="fas fa-times " @click= "clearPassword "></i>
            <i class="fas fa-eye register_username_right" @click= "passwordFlag"></i>
        </div>
        <div class="register_username" v-else>
            <label for="" class="register_username_left">设置密码</label>
            <input type="text" placeholder="组合，4-20个字符" v-model= "password"
            @keyup= "passwordTest">
            <i class="fas fa-check-circle green" v-show= 'flag'></i>
            <i class="fas fa-times " @click= "clearPassword "></i>
            <i class="fas fa-eye-slash register_username_right" @click= "passwordFlag"></i>
        </div>

        <!-- 手机号 -->
        <div class="register_username">
            <label for="" class="register_username_left">手机号码</label>
            <input type="number" placeholder="请输入手机号" v-model= "phone"  @keyup='phoneTest'>
            <i class="fas fa-check-circle green" v-show= 'f'></i>
            <i class="fas fa-times register_username_right" @click= "clearPhone "></i>
        </div>
        <!-- 图片验证码 -->
         <div  class="register_username">
            <label for="" class="register_username_left">验证码</label>
            <input type="text"  placeholder="验证码" v-model= "img_code">
            <span 
            class="register_username_right img_code" 
            @click= "imgCode"
            >{{str ||'验证码'}}</span>
        </div>
        <!-- 手机验证码 -->
        <div  class="register_username">
            <label for="" class="register_username_left">手机验证码</label>
            <input type="text"  placeholder="请输入手机验证码" v-model= "code">
            <span 
            class="register_username_right phone_code"
            @click= "phoneCode"
            >{{flagPhone_code? '点击获取验证码':'此验证码'+count+'秒失效'}}</span>
        </div>
        <!-- 点击注册 -->
        <button class="btn" @click= "register">注册</button>
    </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
    data(){
        return {
            tiggle:true,
            phone:'',
            password:'',
            code:'',
            count:60,
            img_code:'',
            str:'',
            f:false,
            flag:false,
            flagPhone_code:true
        }
    },
    methods:{
        passwordFlag(){
            return this.tiggle=!this.tiggle
        },
        clearPassword(){
           return this.password=''
        },
        clearPhone(){
           return this.phone=''
        },
        // 手机号正则验证
        phoneTest(){
            let reg=/^[1][3,4,5,7,8,9][0-9]{9}$/
            if(reg.test(this.phone)){
                this.f=true
            }else{
                this.f=false
            }
        },
        // 密码验证
        passwordTest(){
           let reg= /^[0-9a-zA-Z]{4,20}$/
            if(reg.test(this.password)){
                this.flag=true
            }else{
                this.flag=false
            }
        },
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
        // 手机号验证码
        async phoneCode(){
            let count=60,
                timer
                timer= setInterval(() => {
                    count--;
                    // console.log(count)
                    this.count=count
                    this.flagPhone_code=false
                    if(count==0){
                        clearInterval(timer)
                        this.flagPhone_code =true
                    }
                }, 1000);
            const result=await request({
                url:'http://10.31.160.200:9091/registUser',
                method:'get',
                // params:{
                //     phone:this.phone
                // },
                // headers:{
                //     "Content-Type":'application/json'
                // }
            })
            console.log(result.data)
        },
        // 请求注册
        async register(){
            const {phone,password,code,img_code,str}=this
            if(img_code==str &&phone &&password &&code){
                const result= await request({
                    url:'http://localhost:3000/register',
                    method:'post',
                    data:{
                        phone,
                        password,
                        code
                    },
                    headers:{
                        "Content-Type":'application/json'
                    }
                })
                if(result.data.state){
                    alert('注册成功')
                    this.$router.push('login')
                }else{
                    alert('账号已存在，请重新注册')
                }
            }else{
                 alert('您填的验证码错误')
            }
            
        }
    },
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/stylesheets/border.styl'
    .register
        width 100%
        font-size .14rem
        color #777
        .register_username
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
            .green
                color green
            .register_username_left
                width 1.05rem
                font-size .16rem
                flex 105
                color #222
                text-align justify
                text-align-last:justify;
                flex-shrink 0
            input 
                padding-left .1rem
                flex 230
                font-size .14rem
                border-top 0
                border-right 0
                border-bottom 0
                border-left 0
                color #333
            .register_username_right
                // flex 40
                width .6rem
                font-size .12rem
                color #333
            .img_code
                flex 80
                background #dddddd
                line-height .32rem
                color #777777
            .phone_code
                flex 80
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