<template>
  <!-- <md-card> -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperData" :key="item.common_id">
          <a href="">
            <div class="swiper_img">
              <img :src="item.common_image" alt="">
            </div>
            <div class="pro_name">{{ item.common_name }}</div>
            <p>{{ item.common_price | current }}</p>
          </a>
          </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
  <!-- </md-card> -->
</template>

<script>
import request from '@/utils/request'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
        swiper,
    swiperSlide
    },
    data() {
        return {
            swiperData:[],
            swiperOption: {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
            }
        }
    },

    async mounted(){
      const res=await request({
        url:'/index.php',
        method:'GET',
        params:{
          ctl: 'IndexNew',
          met: 'indexPT',
          typ: 'json'
        }
      })
      // console.log( res.data.data.newGood )
      this.swiperData = res.data.data.newGood
      // console.log('jwj',this.swiperData)
    }
}
</script>

<style lang="stylus" scoped>
@import 'https://cdn.bootcss.com/Swiper/4.5.1/css/swiper.min.css'
.swiper-container  
  overflow: hidden;
  padding-right: 10px
  border-radius .05rem
  box-shadow: 0 0 .05rem rgba(0,0,0,.1);
  .swiper-slide
    width 1.15rem !important
    margin-right .005rem !important
    border 0 1px 0 0, rgba(186, 186, 186, 0.3)
    a  
      display flex
      flex-direction column
      width 1.15rem
      height 2.01rem
      padding .07rem
      background #fff 
      box-sizing border-box
      box-shadow: 0 0 .05rem rgba(0,0,0,.1);
      .swiper_img 
          width 1.02rem
          height 1.02rem
          margin-bottom .05rem
          img  
            width 100% 
      .pro_name 
        color #5c5c5c 
        font-size .14rem 
        margin-bottom: .03rem;
        white-space: normal;
        line-height: .2rem;
        height: .4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;   
      p  
        margin-top .22rem
        color #BD9960 
        font-size .12rem

</style>