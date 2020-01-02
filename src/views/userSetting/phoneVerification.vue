<template>
    <div class="phoneWrap">
        <div class="phone">
            <p>手机验证</p>
            <span>若您的手机已丢失或停用,请立即修改更换</span>
        </div>
        <i class="fas fa-angle-right"></i>
    </div>
</template>

<script>
export default{
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
.phoneWrap
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