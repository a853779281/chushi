<template>
  <!-- <md-card> -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperData" :key="item.id">
      <router-link
        class="swiperlist"
        :to="{
                name:'Details',
                params:{
                  id:item.id
                },
                query:{
                  ...item
                }
                }"
      >
        <div class="swiper_img">
          <img :src="item.pic" alt />
        </div>
        <div class="pro_name">{{ item.d_title }}</div>
        <p>{{ item.jiage | current }}</p>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link :to="path" class="findMore">
        <div>
          <i class="fas fa-chevron-right"></i>
          <h2>查看更多</h2>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
  <!-- </md-card> -->
</template>

<script>
import request from "@/utils/request";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      path: "/recommend",
      swiperData: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },

  async mounted() {
    const res = await request({
      url: "/index.php",
      method: "GET",
      params: {
        r: "class/cyajaxsub",
        page: 1,
        cid: 85,
        px: "t",
        cac_id: ""
      }
    });
    // console.log("swiper", res);
    const d = res.data.data.content;
    this.swiperData = d.splice(0, 9);
    // console.log('jwj',this.swiperData)
  }
};
</script>

<style lang="stylus" scoped>
@import 'https://cdn.bootcss.com/Swiper/4.5.1/css/swiper.min.css';

.swiper-container {
  overflow: hidden;
  padding-right: 10px;
  border-radius: 0.05rem;
  box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);

  .swiper-slide {
    width: 1.15rem !important;
    margin-right: 0.005rem !important;
    border: 0 1px 0 0, rgba(186, 186, 186, 0.3);

    a.findMore {
      width: 1.15rem;
      height: 2.01rem;
      background: #fff;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        i {
          background: #BD9960;
          color: #fff;
          width: 0.19rem;
          height: 0.19rem;
          border-radius: 50%;
          text-align: center;
          margin-bottom: 0.1rem;
        }

        h2 {
          font-size: 0.12rem;
          color: #BD9960;
        }
      }
    }

    a.swiperlist {
      display: flex;
      flex-direction: column;
      width: 1.15rem;
      height: 2.01rem;
      padding: 0.07rem;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);

      .swiper_img {
        width: 1.02rem;
        height: 1.02rem;
        margin-bottom: 0.05rem;

        img {
          width: 100%;
        }
      }

      .pro_name {
        color: #5c5c5c;
        font-size: 0.14rem;
        margin-bottom: 0.03rem;
        white-space: normal;
        line-height: 0.2rem;
        height: 0.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      p {
        margin-top: 0.22rem;
        color: #BD9960;
        font-size: 0.12rem;
      }
    }
  }
}
</style>