<template>
    <div class="address">
        <div class="address-box">
            <p class="left"> <i class="fas fa-angle-left" @click= "fanhui"></i></p>
            <p class="middle">地址管理</p>
            <p class="right" @click="openF"><i class="fas fa-plus"></i></p>
        </div>
        <div class="content">
            <div class="newlist" v-for= "(item,index) of address" :key = "index"
            >
                <ul>
                    <li>
                        <div class="addbox">
                            <div class="bigbox">
                            <div class="nf">
                                <ul class="nf-box">
                                    <li class="name"> {{item.name}} </li>
                                    <li class="phone"> {{item.phone}} </li>
                                </ul>
                            </div>
                            <div class="sd">
                                <ul class="sd-box">
                                    <li class="site"> {{item.site}} </li>
                                    <li class="detailed"> {{item.detailed}} </li>
                                </ul>
                                
                                </div>
                                <div class="del">
                                    <span><i class="fas fa-trash-alt" @click= "remove"></i> 删除</span>
                                </div>  
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="empty" v-if= "!checkTodos">
            <p>您还没有过添加收货地址</p>
            <span>正确填写常用收货地址方便购物</span>
            <i @click="openF">添加新地址</i>
            </div>
        </div>
        <div class="curtain" v-if= "f">
            <div class="curtain-box">
                <h1>新增收货地址</h1>
                <ul>
                    <li><span class="man">收货人：</span><input type="text" v-model= "name"></li>
                    <li><span>联系方式：</span><input type="text" placeholder="131 2345 6789" v-model= "ophone"></li>
                    <li><span>所在地区：</span><input type="text" v-model= "site" placeholder="浙江省 杭州市 江干区"></li>
                    <li><span>详细地址：</span><input type="text" placeholder="街道、楼牌号等" v-model= "detailed"></li>
                </ul>
                <div class="close"><button @click= "addItem">保存</button>
                    <button @click="closeF">取消</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            f:false,
                address:[

        ],
        
        }
       
    },
    methods:{
        closeF () {
            this.f = false
        },
        openF () {
             this.f = true
        }
        ,
        remove (index) {
            this.address.splice(index,1)
        },
        addItem () {
      const { name,phone,site,detailed } = this 
      this.address.push({
        id: this.address.length + 1,
        name,phone,site,detailed,
        f: false // 判断是否完成
      })
      this.closeF()
      this.name = '',
      this.phone = '',
      this.site = '',
      this.deetailed = ''
    },
    fanhui () {
            this.$router.go(-1)
        }
    
    },
    computed : {
         checkTodos () {
      return this.address.length !=0 
    }
    }
    
}
</script>

<style lang="stylus" scoped>
    .address
      height 100%
      background #E5E5E5
      position relative
      .address-box
        display flex
        height .44rem
        background #ffffff
        border-bottom 1px solid #ccc
        .left
          flex 30
          line-height .5rem
          i 
            font-size .3rem
            margin-left .1rem
            
        .middle
          flex 315
          text-align center
          line-height .44rem
          font-size .18rem
        .right
          flex 30
          line-height .4rem
          font-size .2rem
          i 
            font-size .2rem
          
      .content
        .newlist
          width 100%
          background #fff
          height 1.15rem
          ul
            li
              .addbox
                .bigbox
                border-bottom 
                .nf
                  .nf-box
                    display flex                   
                    li
                      margin .08rem
                      font-size .14rem
                    .name
                      flex 100
                    .phone
                      flex 275
                .sd
                  .sd-box
                    display flex
                    li
                      margin .08rem
                      font-size .12rem
                    .site
                      flex 140
                    .detailed
                      flex 235
                .del
                  border-top 1px solid #ccc
                  display flex
                  justify-content flex-end
                  line-height .6rem
                  span 
                    margin-right .1rem
                    font-size .14rem
        .empty
          display flex
          flex-direction column
          height .8rem
          align-items center
          position absolute
          left 0
          right 0
          bottom 0
          top 0
          margin auto
          text-align center
          p,span,i{
              margin .05rem 0
          }
          span 
            font-size .12rem
            color #696969
          i 
            border 1px solid #696969
            border-radius .1rem
            background #fff
            display block
            width 1rem
            font-size .16rem
      .curtain
        position fixed
        left 0
        top 0
        background rgba( 0,0,0,.5 );
        z-index 99
        width 100%
        height 100%
        .curtain-box
          width 100%
          height 3rem
          background #fff
          text-align center
          font-size .20rem
          h1
            border-bottom 1px solid #ccc
            padding .1rem 0
          ul
            display flex
            flex-direction column
            margin-top .05rem
            li
              margin .06rem 0
              display flex
              justify-content space-around
              font-size .14rem
              .man 
                display block
                margin-right .1rem
                line-height .3rem
              span 
                line-height .3rem
              input 
                width 2.5rem
                height .3rem
                background #f5f5f5
                border 1px solid #fff
                padding-left .1rem
        .close
        display flex
          button 
            margin-top .2rem
            height .35rem   
            background #E5E5E5
            border #fff
            border-radius .05rem
            padding 0 .5rem
            margin .1rem .2rem
</style>
