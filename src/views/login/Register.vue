<template>
     <ul>
        <router-link :to= "{
            name:'register'
        }" 
        class="active" 
        tag="li"
        >立即注册</router-link>|
        <router-link
         :to= "{
            name:'forgetPassword'
        }" 
        tag="li"
        >忘记密码</router-link>
    </ul>
</template>

<style lang="stylus" scoped>
    ul
        display flex
        width 100%
        align-items center
        justify-content center
        margin-top .24rem
        li
            font-size .18rem
            padding 0 .15rem
            color #777
        .active
            font-weight bold
            color #777
</style>