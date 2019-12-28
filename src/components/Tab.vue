<template>
    <div class="home_tab">
        <div class="logo">
            <img src="./../assets/logo.png" alt="">
        </div>
        <div class="home_search">
            <i class="fas fa-search"></i>
            <input type="text" name="" id="" placeholder="优选最初的味道">
        </div>
        <i class="fas fa-bell message"></i>
    </div>

</template>
<script>
export default {
    data(){
        return{
            p:''
        }

    },

    watch:{
        
    },
    methods:{
        // tabPath(){
        //     this.tabPath=this.$route.path
        // }
    },

}
</script>

<style lang="stylus" scoped>
.home_tab 
    display flex 
    height .35rem
    padding .09rem 0 
    background #fff
    align-items center
    background lightgreen
    .logo 
        flex 39 
        img 
            width .39rem
    .home_search 
        flex 300 
        display flex
        height 100% 
        align-items  center
        background #f2f2f2
        border-radius .05rem
        input 
            flex 260
            border 0
            height 100%
            background #f2f2f2
        i 
            flex 25
            font-size .16rem
            color #5c5c5c
            padding-left .1rem
    .message 
        flex 36
        color #5c5c5c
        text-align center
</style>


