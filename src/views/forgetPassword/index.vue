<template>
    <div class="forgetPassword">
        <ForgetPBar></ForgetPBar>
        <div class="forgetPassword_body">
          <ForgetPBody></ForgetPBody>  
        </div>
    </div>
</template>

<script>
import ForgetPBar from './ForgetPBar'
import ForgetPBody from './ForgetPBody'
export default {
    components:{
        ForgetPBar,
        ForgetPBody
    }
}
</script>
<style lang="stylus" scoped>
.forgetPassword 
    flex 1
    height 100%
    display flex
    flex-direction column
    .forgetPassword_body 
        width 100%
        flex 1
        overflow auto
        

</style>
