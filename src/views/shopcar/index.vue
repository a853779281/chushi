<template>
    <div class="shopcar">
        <ShopcarTab></ShopcarTab>
        <div class="shopcar_body">
           购物车主体
        </div>
    </div>
</template>

<script>
import ShopcarTab from './ShopcarTab'
export default {
    components:{
        ShopcarTab
    }
}
</script>
<style lang="stylus" scoped>
.shopcar 
    flex 1
    height 100%
    display flex
    flex-direction column
    .shopcar_body 
        width 100%
        flex 1
        overflow auto
        
        

</style>