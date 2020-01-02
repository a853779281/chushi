<template>
    <div class="top">
        <i class="fas fa-chevron-left" @click="goBack"></i>
        <span>订单管理</span>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.replace('/mine')
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
    background-color #f4f4f4
    box-shadow-bottom 3px

    i 
        color #333
    span 
        flex 1
        color #333
</style>