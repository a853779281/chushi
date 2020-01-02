<template>
    <div>
        <div class="header">
            <div class="header_logo"></div>
            <div class="header_others">
                <p class="mine_shopmall">我的UCenter</p>
                <p class="back_ucenter">
                    <a href="">返回UCenter</a>
                </p>
            </div>
            <div class="nav_more" @click= "navFlag">
                <p>
                    更多
                    <i class="fas "
                    :class= "{'fa-caret-down':!flag,'fa-caret-up':flag}"></i>
                </p>
            </div>
            <div class="header_nav" v-show="flag">
                <ul>
                    <li>商城系统</li>
                    <li>ImBuilder</li>
                    <li>网付宝</li>
                    <li>退出</li>
                </ul>
            </div>
        </div>
        <ul class="nav_content">
            <router-link :to= "{name:'accountInformation'}" tag="li" active-class="active">账户信息</router-link>
            <router-link :to= "{name:'photo'}"  tag="li" active-class="active">头像照片</router-link>
            <router-link :to= "{name:'safe'}" tag="li" active-class="active">账户安全</router-link>
            <router-link :to= "{name:'modify'}" tag="li" active-class="active">修改登录密码</router-link>
            <router-link :to= "{name:'binding'}" tag="li" active-class="active">账号绑定</router-link>
        </ul>
    </div>
    
    
</template>


<script>
export default {
    data(){
        return {
            flag:false
        }
    },
    methods:{
        navFlag(){
            this.flag=!this.flag
        }
    }
}
</script>

<style lang="stylus" scoped>
    .header  
        width 100%
        background #e45050
        height 1.53rem
        display flex
        flex-direction column
        // align-items center
        position relative
        .header_logo
            height .6rem
            width 2.4rem
            align-self center
            background url('~@/assets/logo_yellow.png')
            background-size 1.2rem
            background-repeat no-repeat
            background-position 50%
        .header_others
            align-self flex-start
            .mine_shopmall
                font-size .2rem
                color #fff
                margin-left .1rem 
                margin-top .3rem
            .back_ucenter
                font-size .14rem
                margin-top .02rem
                margin-left .1rem 
                border 1px solid #777
                border-radius .1rem
                text-align center
                height .2rem
                line-height .2rem
                a
                    color #777
        .nav_more
            align-self flex-end
            font-size .12rem
            color #fff
            margin-right .2rem
            position relative
            bottom .2rem
        .header_nav
            align-self flex-end
            position absolute
            top 1.53rem
            background #D04E4E
            z-index 9
            ul
                border 1px solid #DA6E6E
                width .98rem
                height 1.4rem
                li
                    text-align center
                    border-bottom 1px solid #DA6E6E
                    padding .1rem .2rem
                    font-size .14rem
                    color #fff
    .nav_content
        display flex
        background #f5f5f5
        height .6rem
        padding  .15rem 0
        justify-content space-between
        flex-wrap wrap
        line-height .3rem
        li
            flex-shrink 0
            padding 0 .1rem
            align-self flex-start
            color #000
            font-size .14rem
            &.active
                color #ff0000
</style>