<template>
    <div class="category">
        <CategoryTab></CategoryTab>
        <div class="category_body">
                分类主体
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.category 
    flex 1
    height 100%
    display flex
    flex-direction column
    .category_body 
        // padding-top .53rem
        width 100%
        flex 1
        overflow auto
        
</style>

<script>
import CategoryTab from './CategoryTab'
export default {
    components:{
        CategoryTab
    }
}
</script>