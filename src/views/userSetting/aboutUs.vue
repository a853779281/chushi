<template>
    <div class="top">
        <i class="fas fa-chevron-left" @click="goBack"></i>
        <span class="history">设置</span>
        <i></i>
    </div>
</template>

<script>
export default{
    methods: {
        goBack(){
            this.$router.push('/mine')
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>