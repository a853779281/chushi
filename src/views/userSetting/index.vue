<template>
    <div class="wrap">
        <TopSetting/>

        <ul>
            <li v-for="(item,index) in list" :key="index">
                <a href="">
                    <div class="phone">
                        <p>{{item.des}}</p>
                        <span>{{item.detail}}</span>
                    </div>
                    <i :class="item.className"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import TopSetting from "./topSetting";
export default{
    components: {
        TopSetting,
    },
    data(){
        return{
            list:[
                {
                    des:'手机验证',
                    detail:'若您的手机已丢失或停用,请立即修改更换',
                    className:'fas fa-angle-right'
                },
                {
                    des:'用户反馈',
                    detail:'您在使用中的问题与建议可向我们反馈',
                    className:'fas fa-angle-right'
                },
                {
                    des:'关于我们',
                    detail:'',
                    className:'fas fa-angle-right'
                },                                                        {
                    des:'安全退出',
                    detail:'',
                    className:''
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylesheets/border.styl';
.wrap 
    height 100%
    background-color #eee
    ul
        display flex
        flex-direction column
        li
            border 0 0 1px 0,#ccc
            margin-top .1rem
            a
                display flex
                padding .1rem .1rem
                justify-content space-between
                height 0.5rem
                background-color #fff
                align-items center
                .phone
                    p
                    color #333
                    font-size: 0.18rem;
                    line-height .2rem
                    span 
                        font-size: 0.14rem;
                        margin-left .1rem
                        color #ccc
                        line-height .2rem
                i
                    font-size .24rem
                    color #ccc
</style>


<style lang="stylus" scoped>

    
</style>