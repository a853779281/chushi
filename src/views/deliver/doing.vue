<template>
    <div class="box">
        <ul class="show">
            <router-link tag='li' v-for="(item,index) in state" :key="index" :to="{
                name:item.name,
            }" active-class="active">
                <p>{{item.num}}</p>
                <p>{{item.des}}</p>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted () {
        console.log(this.$route.name)
    },
    data(){
        return {
            state:[
                {
                    num:0,
                    des:'待发货',
                    name:'waitdeliver'
                },
                {
                    num:0,
                    des:'待付款',
                    name:'waitpay'
                },
                {
                    num:0,
                    des:'已发货',
                    name:'alreadydeliver'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    .show 
        display flex
        justify-content space-between
        background-color #efefef
        height .64rem
        align-items center
        li
            flex 1
            color #a1a1a1
            text-align center
            height 100%
            line-height .64rem
            display flex
            flex-direction column
            justify-content center
            p
                line-height .2rem
            &.active
                color #af894d
                background-color #fff

</style>