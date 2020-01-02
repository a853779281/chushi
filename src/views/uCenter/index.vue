<template>
    <div class="uCenter">
        <UCenterBar/>
        <div class="uCenter_body">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <UCenterFoot/>
    </div>
</template>

<script>
import UCenterBar from "./UCenterBar";
import UCenterFoot from "./UCenterFoot"
export default {
    components:{
        UCenterBar,
        UCenterFoot
    }
}
</script>

<style lang="stylus" scoped>
    .uCenter
        flex 1
        display flex
        flex-direction column
        .uCenter_body
            flex 1
            overflow auto
</style>
