<template>
    <div class="mine_tab">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-list"></i>
    </div>
</template>

<script>

export default {
    data(){
        return {
            // visible:true
        }
    }
}
</script>

<style lang="stylus" scoped>
.mine_tab 
    width 100%
    height 0.5rem
    background-color transparent
    padding 0 .15rem
    box-sizing border-box
    position fixed
    display flex
    justify-content space-between
    align-items center
    z-index 999
    i 
        color white
        margin-top 0.15rem
       


        
</style>