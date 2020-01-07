<template>
    <div class="register">
        <RegisterTab></RegisterTab>
        <div class="register_body">
          <RegisterBody></RegisterBody>  
        </div>
    </div>
</template>

<script>
import RegisterTab from './RegisterTab'
import RegisterBody from './RegisterBody'
export default {
    components:{
        RegisterTab,
        RegisterBody
    },
}
</script>
<style lang="stylus" scoped>
.register 
    flex 1
    height 100%
    display flex
    flex-direction column
    .register_body 
        width 100%
        flex 1
        overflow auto
        

</style>