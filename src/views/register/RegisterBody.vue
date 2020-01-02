<template>
    <div class="register">
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
        <div class="register_username">
            <label for="" class="register_username_left">手机号码</label>
            <input type="number" placeholder="请输入手机号" v-model= "phone"  @keyup='phoneTest'>
            <i class="fas fa-check-circle green" v-show= 'f'></i>
            <i class="fas fa-times register_username_right" @click= "clearPhone "></i>
        </div>
         <div  class="register_username">
            <label for="" class="register_username_left">验证码</label>
            <input type="text"  placeholder="验证码" v-model= "img_code">
            <span class="register_username_right img_code">验证码</span>
        </div>
        <div  class="register_username">
            <label for="" class="register_username_left">手机验证码</label>
            <input type="text"  placeholder="请输入手机验证码" v-model= "phone_code">
            <span class="register_username_right phone_code">获取验证码</span>
        </div>
        <button class="btn">注册</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tiggle:true,
            phone:'',
            password:'',
            phone_code:'',
            img_code:'',
            f:false,
            flag:false
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
        phoneTest(){
            let reg=/^[1][3,4,5,7,8,9][0-9]{9}$/
            if(reg.test(this.phone)){
                this.f=true
            }else{
                this.f=false
            }
        },
        passwordTest(){
           let reg= /^[0-9a-zA-Z]{4,20}$/
            if(reg.test(this.password)){
                this.flag=true
            }else{
                this.flag=false
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