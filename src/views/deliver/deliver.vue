<template>
    <div>
        <Top/>
        <div class="list">
            <router-link active-class='active' :to="{
                name:'doing',
            }">进行中</router-link>
            <router-link active-class='active' :to="{
                name:'done'
            }">已完成</router-link>
            <router-link active-class='active' :to="{
                name:'close'
            }">已关闭</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Top from './topDeliver'
export default {
    components: {
        Top
    }
}
</script>

<style lang="stylus" scoped>
.list 
    display flex
    height 0.44rem
    justify-content space-between
    a 
        flex 1
        background-color #fff
        text-align center
        height 100%
        line-height 0.44rem
        color #af894d
        box-sizing border-box 
        &.active
            border-bottom 3px solid #af894d

</style>