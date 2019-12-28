<template>
    <div class="layout">
        <!-- <Tab></Tab> -->
        <keep-alive :include= "$route.meta.include">
            <router-view></router-view>
        </keep-alive>
        <!-- <Mine></Mine> -->
        <TabBar v-if ="flag"></TabBar>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag:true,
        }
    },
    watch:{
        $route:{
            deep:true,
            handler(){
                if(this.$route.name=='login'){
                    this.flag=false
                }else{
                    this.flag=true
                }
            }
        }
    }
}
</script>

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