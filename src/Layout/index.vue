<template>
    <div class="layout">
        <!-- <Tab></Tab> -->
        <keep-alive :include="$route.meta.include">
            <router-view></router-view>
        </keep-alive>
        <!-- <Mine></Mine> -->
        <TabBar v-if="flag"></TabBar>
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
    },
    data(){
        return{
            flag:true
        }
    },
    watch:{
        $route:{
            deep:true,
            handler(){
                let f=this.$route.path.indexOf('/deliver')
                if(this.$route.name=='shop'||    this.$route.name=='goods' || this.$route.name == 'search' || this.$route.name == 'search' || this.$route.name == 'orders'|| f!=-1 ||this.$route.path == '/deposit'||this.$route.path == '/addr'||this.$route.path == '/editaddr'||this.$route.path == '/footprint'||this.$route.path == '/setting'){
                    this.flag=false
                } else {
                    this.flag=true
                }
            }
        }
    }
}
</script>