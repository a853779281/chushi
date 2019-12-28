<template>
    <div class="home">
        <HomeTab></HomeTab>
        <div class="home_body">
            首页主体
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.home 
    flex 1
    height 100%
    display flex
    flex-direction column
    .home_body 
        flex 1
        overflow auto
</style>

<script>
import HomeTab from './HomeTab'
export default {
    components:{
        HomeTab
    }
}
</script>