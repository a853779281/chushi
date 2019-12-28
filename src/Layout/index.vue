<template>
    <div class="layout">
        <!-- <Tab></Tab> -->
        <keep-alive :include="$route.meta.include">
            <router-view></router-view>
        </keep-alive>
        <!-- <Mine></Mine> -->
        <TabBar></TabBar>
    </div>
</template>

<style lang="stylus" scoped>
.layout 
    display flex 
    flex-direction column
    height 100%


</style>
<script>
import TabBar from 'components/TabBar'
// import Tab from 'components/Tab'
// import Mine from '@/views/mine'
export default {
    components:{
        TabBar
    }
}
</script>