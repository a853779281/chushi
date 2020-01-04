<template>
    <div class="uCenter">
        <UCenterBar/>
        <div class="uCenter_body">
            <keep-alive include="$route.meta.include">
                <router-view></router-view>
            </keep-alive>
            <UCenterFoot/>
        </div>
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
