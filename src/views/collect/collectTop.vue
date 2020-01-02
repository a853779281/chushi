<template>
    <div class="collectTop">
        <i class="fas fa-chevron-left" @click="goBack"></i>
        <div class="collect">
            <router-link active-class="active" :to="{name:'goods'}">商品收藏</router-link>
            <router-link active-class="active" :to="{name:'shop'}">店铺收藏</router-link>
        </div>
        <i class="fas fa-list"></i>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.replace('/mine')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .collectTop
        padding 0 .15rem
        height 0.41rem
        display flex
        background-color #fff
        align-items center
        justify-content space-between
        i 
            font-size .20rem
        .collect
            a
                border 1px solid #BD9960
                font-size .16rem
                height 0.36rem  
                width 1.04rem
                border-radius 3px
                padding 5px .15rem
                color #222
                &.active
                    background-color #BD9960
                    color white
                    

</style>