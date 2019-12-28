<template>
    <div class="mine">
        <MineTab></MineTab>
        <div class="mine_body">

        </div>
    </div>
</template>

<script>
import MineTab from './MineTab'
export default {
    components:{
        MineTab
    }
}
</script>
<style lang="stylus" scoped>
.mine 
    flex 1
    height 100%
    display flex
    flex-direction column
    .mine_body 
        width 100%
        flex 1
        overflow auto
        

</style>