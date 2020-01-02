<template>
    <div class="login_tab">
        <i class="fas fa-chevron-left" @click= "goback"></i>
        <ul>
            <router-link :to= "{name:'AccountLogin'}" tag="li">账户登录</router-link>
            <router-link :to= "{name:'PhoneLogin' }" tag="li">手机登录</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
.login_tab 
    display flex
    width 100%
    height .53rem
    align-items center
    background #f2f2f2
    padding 0 .15rem
    box-sizing border-box
    // justify-content space-between
    ul
        flex 1
        display flex
        justify-content center
        li
            padding 0 .1rem

    
        
</style>