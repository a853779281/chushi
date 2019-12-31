<template>
    <div class="layout">
        <!-- <Tab></Tab> -->
        <keep-alive :include= "$route.meta.include">
            <router-view></router-view>
        </keep-alive>
        <!-- <Mine></Mine> -->
        <TabBar v-if="flag"></TabBar>
    </div>
</template>

<script>
import TabBar from 'components/TabBar'
export default {
     data(){
        return {
            flag:true
        }
    },
    watch:{
        $route:{
            deep:true,
            handler(){
                if(this.$route.name=='AccountLogin'||this.$route.name=='PhoneLogin'||this.$route.name=='register'||this.$route.name=='forgetPassword'){
                    this.flag=false
                }else{
                    this.flag=true
                }
            }
        }
    },
    components:{
        TabBar
    }
}
</script>

<style lang="stylus" scoped>
.layout 
    display flex 
    flex-direction column
    height 100%


</style>
<<<<<<< HEAD
=======
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
                if(this.$route.name=='shop'||       this.$route.name=='goods' || this.$route.name == 'search' || this.$route.name == 'search' || this.$route.name == 'orders'){
                    this.flag=false
                } else {
                    this.flag=true
                }
            }
        }
    }
}
</script>
>>>>>>> f90835f4e2c582300b94f0b530c0fb7b9bc74789
