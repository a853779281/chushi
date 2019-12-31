<template>
    <div class="search">
        <div class="search-box">
        <span class="fas fa-angle-left" @click="fanhui"></span>
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            shape="round"
            label="宝贝"
            @click="onSearch"
        >
  
</van-search>
<router-link :to= "{
    name:'orders'
}"> 搜索</router-link>
</div>
<div slot="action" @click="onSearch" class="search-bottom">
    <p class="hot">热门搜索</p>
    <p class="search-val">黑巨里</p>
</div>
    </div>
</template>

<script>
export default {
    methods:{
        onSearch(){
            
        },
        fanhui () {
            this.$router.go(-1)
        }
    },
    data(){
        return {
            value:"",
            flag:false,
            f:false
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~assets/stylesheets/input.css'
@import '~assets/stylesheets/border.styl' 
    .search
      background #f6f6f6
      flex 1
      height 100%
      .search-box
        background #fff
        display flex
        height .45rem
        width 100%
        border 0 0 1px 0,#696969
        .fa-angle-left:before 
          line-height .45rem
          margin-left .15rem
          font-size .20rem
        a
          font-size .12rem
          line-height .45rem
          margin-right .05rem
          color #444
    .search-bottom
      width 100%
      height 1rem
      background #fff
      .hot
        padding .12rem
        font-size .15rem
      .search-val
        font-size .12rem
        padding .1rem 0
        background #f6f6f6
        width .628rem
        border-radius .1rem
        text-align center
        margin-left .1rem
</style>
