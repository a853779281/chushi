<template>
    <div class="wrap">
        <addrTop/>
        <div class="addr">
            <p class="p1">您还没有添加过收获地址</p>
            <p class="p2">正确填写收获地址方便购物</p>
        </div>
    </div>
</template>

<script>
import addrTop from "./addrTop"
export default {
    components: {
        addrTop
    }
}
</script>

<style lang="stylus" scoped>
.wrap 
    height 100% 
    .addr
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        width 100%
        text-align center
        .p1
            margin-bottom: 0.1rem;
            font-size: 0.18rem;
            line-height: 0.2rem;
        .p2
            color: #999;
</style>
