<template>
    <div class="orders">
        <div class="orders-box">
        <span class="fas fa-angle-left" @click="fanhui"></span>
        <van-tabs @click="onClick">
            <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
  <van-tab title="实物订单" active-class="active">
      <van-tabs v-model="active">
  <van-tab title="全部">
      <div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div>
  </van-tab>
  <van-tab title="待付款" data-state="wait_pay"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="代发货" data-state="order_payed"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="待收货" data-state="wait_confirm_goods"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="待评价" data-state="finish"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
</van-tabs>
  </van-tab>
  <van-tab title="虚拟订单" active-class="active">
      <van-tabs v-model="active">
  <van-tab title="全部"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="待付款"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="代使用"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>
  <van-tab title="待评价"><div class="title-box">
          <div class="wrapper">
              <i class="fab fa-d-and-d"></i>
              <p>您还没有相关的订单</p>
              <span class="gohere">可以去看看哪些需要买的</span>
              <router-link class="go" :to= "{name:'List'}">
                  随便逛逛</router-link>
          </div>
      </div></van-tab>

</van-tabs>
  </van-tab>
</van-tabs>
<span class="fas fa-ellipsis-h" @click="Show">
    <ul class="list" v-if="f">
        <router-link :to= "{name:'home'}" tag=li><i class="fas fa-home"></i>首页</router-link>
        <router-link :to= "{name:'search'}" tag=li><i class="fal fa-search"></i>搜索</router-link>
        <router-link :to= "{name:'shopcar'}" tag=li><i class="fal fa-shopping-cart"></i>购物车</router-link>
        <router-link :to= "{name:''}" tag=li><i class="far fa-comment"></i>消息</router-link>
        
    </ul>
</span>
</div>
    
    </div>
</template>

<script>

export default {
    
    methods:{
         onClick(name, title) {
         this.$toast(title)
    },
    fanhui () {
            this.$router.go(-1)
        },
        onSearch () {

        },
        Show () {
            if(this.f===false){
            this.f=true
            }else{
                 this.closeF()   
            }
            
            
        },
        closeF () {

            this.f=false
            
        }
    },
    data () {
        return{
            value:"",
            active:2,
            f:false,
        }
    }
}
    
</script>


<style lang="stylus" scoped>
@import '~assets/stylesheets/input-orders.css'
 .orders
   flex 1
   height 100%
   .orders-box
     display flex
     width 100%
   .fa-angle-left:before
     font-size .3rem
     margin-left .10rem
     line-height .3rem      
   .fa-ellipsis-h:before
     font-size .25rem
     margin-right .10rem
     line-height .3rem
</style>
