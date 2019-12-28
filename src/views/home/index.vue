<template>
    <div class="home">
        <HomeTab></HomeTab>
        <div class="home_body">
<<<<<<< HEAD
            <div class="top_bg"></div>
            <div class="apple_bg">
                <div class="new_pro_title">
                    <h3>新品首发</h3>
                </div>
                <HomeSwiper></HomeSwiper>
            </div>
            <div class="dream_bg">
            </div>
            <div class="manage">
                <div class="manage_top">
                    <div class="more">
                        <h3>自营专区</h3>
                        <a href="">更多 ></a>
                    </div>
                    <ul class="manage_more">
                        <li v-for="item of manageArr1" :key="item.common_id">
                            <a href="">
                                <div class="swiper_img">
                                <img :src="item.common_image" alt="">
                                </div>
                                <div class="pro_name">{{ item.common_name }}</div>
                                <p>{{ item.common_price | current }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="manage_list">
                    <li v-for="item of manageArr2" :key="item.common_id">
                        <a href="">
                            <div class="img">
                                <img :src="item.common_image" alt="">
                            </div>
                            <div class="descript">
                                <h3>{{ item.common_name }}</h3>
                                <p>{{ item.common_price | current }}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="recommend">
                <h3>人气推荐</h3>
                <ul>
                    <li v-for="item of recommendData" :key="item.common_id">
                        <a href="">
                            <div class="img">
                                <img :src="item.common_image" alt="">
                            </div>
                            <div class="pro_name">{{ item.common_name }}</div>
                            <p>{{ item.common_price | current }}</p>
                        </a>
                    </li>
                </ul>
            </div>
=======
            首页主体
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
            <p>首页主体</p>
>>>>>>> 358b4d8ee7b54ed03154211e6d74eefc239bd883
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.home 
    flex 1
    height 100%
    display flex
    flex-direction column
    overflow auto
    .home_body 
        flex 1
        overflow auto
        .top_bg 
            height .53rem
            background url(./../../assets/img/home_top_bg1.jpg)
        .apple_bg 
            height 3.51rem
            background url(./../../assets/img/apple_bg.jpg) no-repeat
            background-size: 100% auto
            padding: 0 .1rem
            padding-top: .47rem
            padding-bottom: .14rem
            overflow: hidden
            box-sizing border-box
            .new_pro_title 
                position: relative
                margin-bottom: .14rem
                line-height: 1
                height: .75rem
                h3
                    position absolute 
                    left 0 
                    bottom 0
                    color #fff 
                    font-size .23rem 
                    font-weight bold
        .dream_bg  
            background url(./../../assets/img/dream_bg.jpg)
            background-size: 100% auto;
            height 1.31rem
        .manage  
            background url(./../../assets/img/red_date_bg.jpg) no-repeat
            background-size: 100% auto;
            height 4.3rem 
            padding .14rem .1rem 0
            .manage_top  
                display flex
                .more  
                    display inline-block
                    width 1.15rem
                    height 2.01rem 
                    a  
                        display: block;
                        width: .6rem;
                        height: .18rem;
                        border-radius: .09rem;
                        color: #777777;
                        background: #fff;
                        font-size: .12rem;
                        text-align: center;
                        line-height: .18rem;
                        margin-top .1rem
                    h3  
                        color #fff 
                        font-size .23rem 
                        font-weight bold
                        padding-top .15rem
                .manage_more  
                    // position relative
                    display flex
                    width 1.15rem !important
                    margin-right .01rem !important
                    border 0 1px 0 0, rgba(186, 186, 186, 0.3) 
                    li  
                        margin-left .05rem
                        a  
                            display flex
                            flex-direction column
                            width 1.15rem
                            height 2.01rem
                            padding .07rem
                            background #fff 
                            box-sizing border-box
                            .swiper_img 
                                width 1.02rem
                                height 1.02rem
                                margin-bottom .05rem
                                img  
                                    width 100% 
                            .pro_name 
                                color #5c5c5c 
                                font-size .14rem 
                                margin-bottom .03rem;
                                white-space normal;
                                line-height .2rem;
                                height .4rem;
                                display -webkit-box;
                                -webkit-box-orient vertical;
                                -webkit-line-clamp 2;
                                overflow hidden;   
                            p  
                                margin-top .22rem
                                color #BD9960 
                                font-size .12rem
            .manage_list   
                display flex  
                width 100%
                flex-wrap wrap 
                background #fff
                margin-top .1rem
                li  
                    box-sizing border-box
                    width 50% 
                    border-right 1px solid rgba(186,186,186,0.3)
                    border-bottom 1px solid rgba(186,186,186,0.3)  
                    a  
                        display flex 
                        padding .07rem;
                        position relative;
                        .img 
                            width .75rem 
                            height .75rem 
                            img  
                                width 100%  
                        .descript  
                            padding 0 .05rem
                            h3  
                                font-size .14rem
                                width .81rem
                                line-height .20rem
                                height .40rem
                                margin-bottom .20rem
                                display -webkit-box
                                -webkit-box-orient vertical
                                -webkit-line-clamp 2
                                overflow hidden
                                color #5c5c5c
                            p  
                                font-size .13rem
                                color #BD9960
                                line-height 1
        .recommend 
            background url(./../../assets/img/recommend_bg.jpg) no-repeat
            background-size: 100% auto; 
            padding .75rem .1rem 0
            h3  
                color #fff 
                font-size .23rem 
                font-weight bold 
                padding .25rem 0 .1rem
            ul  
                display flex
                flex-wrap wrap 
                justify-content space-between
                li  
                    width 48% 
                    padding .03rem
                    border-radius .05rem
                    a  
                        padding .07rem
                        display flex  
                        flex-direction column
                        background #fff
                        align-items center
                        box-shadow: 0 0 .05rem rgba(0,0,0,.1);
                        .img  
                            width 1.6rem 
                            height 1.6rem 
                            img  
                                width 100%
                                height 100%
                        .pro_name 
                            color #5c5c5c 
                            font-size .14rem 
                            margin-bottom: .03rem;
                            white-space: normal;
                            line-height: .2rem;
                            height: .4rem;
                            width 1.6rem
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        p   
                            margin-top .22rem
                            color #BD9960 
                            font-size .12rem
                            text-align left 
                            width 100%









</style>

<script>
import HomeTab from './HomeTab'
import HomeSwiper from './HomeSwiper'
import request from '@/utils/request'
export default {
    components:{
        HomeTab,
        HomeSwiper
    },
    data(){
        return{
            manageArr1:[],
            manageArr2:[],
            recommendData:[],  
        }
    },
    
    methods:{
      handleScroll(e){
        // console.log(e.target.scrollTop)
        if(!e.target.scrollTop){
            // console.log(this.$children[0].$el.style)
            this.$children[0].$el.style.background='url(./../../assets/img/home_top_bg1.jpg)'

        }else{
            this.$children[0].$el.style.background='#fff'
            

        }
      }
    },

    async mounted(){
        window.addEventListener('scroll',this.handleScroll,true)
        const res=await request({
        url:'/index.php',
        method:'GET',
        params:{
          ctl: 'IndexNew',
          met: 'indexPT',
          typ: 'json'
        }
      })
    //   console.log( res.data.data )
      const startData = res.data.data.shopSelfSupportGoodsList
      this.manageArr1 = startData.splice(0,2)
      this.manageArr2 = startData.splice(0)
      this.recommendData = res.data.data.recommendedGoodsList
       
    }
}
</script>