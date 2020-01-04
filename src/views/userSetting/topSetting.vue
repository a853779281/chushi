<template>
    <div class="top">
        <i class="fas fa-chevron-left" @click="goBack"></i>
        <span class="history">设置</span>
        <i></i>
    </div>
</template>

<script>
export default{
    methods: {
        goBack(){
            this.$router.push('/mine')
        }
    }
}
</script>

<style lang="stylus" scoped>
.top
    width 100%
    height 0.5rem
    background-color transparent
    padding 0 .15rem
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    z-index 999
    text-align center
    background-color #fff
    box-shadow-bottom 3px
    border 0 1px 0 0,#ccc
    margin-bottom .1rem
    i 
        color #333
    span
        color #333
        &.history 
            flex 1
            color black
            font-size .2rem
</style>