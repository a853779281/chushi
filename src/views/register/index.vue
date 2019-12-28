<template>
    <div class="register">
        <RegisterTab></RegisterTab>
        <div class="register_body">
            
        </div>
    </div>
</template>

<script>
import RegisterTab from './RegisterTab'
export default {
    components:{
        RegisterTab
    }
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