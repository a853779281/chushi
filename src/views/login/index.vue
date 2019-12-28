<template>
    <div class="login">
        <LoginTab>
            
        </LoginTab>
        <div class="login_body">
            <keep-alive include="$route.meta.include">
                <router-view></router-view>
            </keep-alive>
        </div>
        <LoginTabBar/>
    </div>
</template>

<script>
import LoginTab from './LoginTab'
import LoginTabBar from './LoginTabBar'
export default {
    components:{
        LoginTab,LoginTabBar
    }
}
</script>
<style lang="stylus" scoped>
.login 
    flex 1
    height 100%
    display flex
    flex-direction column
    .login_body 
        width 100%
        flex 1
        overflow auto
        

</style>