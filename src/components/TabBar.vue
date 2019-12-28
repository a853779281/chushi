<template>
    <ul class="tabbar">
        <li v-for="item of tabbar" :key="item.id" >
            <router-link :to="item.path" active-class="active">
                <i class="fas" :class="item.iconName"></i>
            </router-link>
        </li>
    </ul>
</template>

<style lang="stylus" scoped>
@import '~assets/stylesheets/border.styl';
.tabbar 
    display flex
    height .496rem
    width 100%
    align-items center
    border 1px 0 0 0, #ccc
    background #fff
    li 
        flex 1 
        a 
            display flex 
            justify-content center
            align-items center 
            &.active 
                i
                    color red
            i 
                color #000000 
                font-size .24rem
    
</style>
<script>
export default {
    data(){
        return {
            tabbar:[
                {
                    id:1,
                    iconName:'fa-home',
                    path: '/home'
                },
                {
                    id:2,
                    iconName:'fa-tag',
                    path:'/category'
                },
                {
                    id:3,
                    iconName:'fa-shopping-cart',
                    path: '/shopcar'
                },
                {
                    id:4,
                    iconName:'fa-user',
                    path: '/mine'
                },
            ]
        }
    },
}
</script>