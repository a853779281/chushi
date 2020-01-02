<template>
    <div class="forgetPassword_tab">
        <i class="fas fa-chevron-left" @click= "goback"></i>
        <span>找回密码</span>
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
.forgetPassword_tab 
    display flex
    width 100%
    height .53rem
    align-items center
    background #f2f2f2
    padding 0 .15rem
    box-sizing border-box
    justify-content space-between
    span 
        flex 1
        text-align center
    
        
</style>