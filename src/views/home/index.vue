<template>
  <div class="home">
    <HomeTab></HomeTab>
    <div class="home_body">
      <div class="top_bg"></div>
      <div class="apple_bg">
        <div class="new_pro_title">
          <h3>新品首发</h3>
        </div>
        <HomeSwiper></HomeSwiper>
      </div>
      <div class="dream_bg"></div>
      <div class="manage">
        <div class="manage_top">
          <div class="more">
            <h3>自营专区</h3>
            <router-link :to="{name:'searchList'}">更多 ></router-link>
          </div>
          <ul class="manage_more">
            <li v-for="item of manageArr1" :key="item.id">
              <router-link
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
            </li>
          </ul>
        </div>
        <ul class="manage_list">
          <li v-for="item of manageArr2" :key="item.id">
            <router-link
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
              <div class="img">
                <img :src="item.pic" alt />
              </div>
              <div class="descript">
                <h3>{{ item.d_title }}</h3>
                <p>{{ item.jiage | current }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <h3>人气推荐</h3>
        <ul>
          <li v-for="item of recommendData" :key="item.id">
            <router-link
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
              <div class="img">
                <img :src="item.pic" alt />
              </div>
              <div class="pro_name">{{ item.d_title }}</div>
              <p>{{ item.jiage | current }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.home {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .home_body {
    flex: 1;
    overflow: auto;

    .top_bg {
      height: 0.53rem;
      background: url('./../../assets/img/home_top_bg1.jpg');
    }

    .apple_bg {
      height: 3.51rem;
      background: url('./../../assets/img/apple_bg.jpg') no-repeat;
      background-size: 100% auto;
      padding: 0 0.1rem;
      padding-top: 0.47rem;
      padding-bottom: 0.14rem;
      overflow: hidden;
      box-sizing: border-box;

      .new_pro_title {
        position: relative;
        margin-bottom: 0.14rem;
        line-height: 1;
        height: 0.75rem;

        h3 {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
          font-size: 0.23rem;
          font-weight: bold;
        }
      }
    }

    .dream_bg {
      background: url('./../../assets/img/dream_bg.jpg');
      background-size: 100% auto;
      height: 1.31rem;
    }

    .manage {
      background: url('./../../assets/img/red_date_bg.jpg') no-repeat;
      background-size: 100% auto;
      height: 4.3rem;
      padding: 0.14rem 0.1rem 0;

      .manage_top {
        display: flex;

        .more {
          display: inline-block;
          width: 1.15rem;
          height: 2.01rem;

          a {
            display: block;
            width: 0.6rem;
            height: 0.18rem;
            border-radius: 0.09rem;
            color: #777777;
            background: #fff;
            font-size: 0.12rem;
            text-align: center;
            line-height: 0.18rem;
            margin-top: 0.1rem;
          }

          h3 {
            color: #fff;
            font-size: 0.23rem;
            font-weight: bold;
            padding-top: 0.15rem;
          }
        }

        .manage_more {
          // position relative
          display: flex;
          width: 1.15rem !important;
          margin-right: 0.01rem !important;
          border: 0 1px 0 0, rgba(186, 186, 186, 0.3);

          li {
            margin-left: 0.05rem;

            a {
              display: flex;
              flex-direction: column;
              width: 1.15rem;
              height: 2.01rem;
              padding: 0.07rem;
              background: #fff;
              box-sizing: border-box;

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
      }

      .manage_list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        background: #fff;
        margin-top: 0.1rem;

        li {
          box-sizing: border-box;
          width: 50%;
          border-right: 1px solid rgba(186, 186, 186, 0.3);
          border-bottom: 1px solid rgba(186, 186, 186, 0.3);

          a {
            display: flex;
            padding: 0.07rem;
            position: relative;

            .img {
              width: 0.75rem;
              height: 0.75rem;

              img {
                width: 100%;
              }
            }

            .descript {
              padding: 0 0.05rem;

              h3 {
                font-size: 0.14rem;
                width: 0.81rem;
                line-height: 0.2rem;
                height: 0.4rem;
                margin-bottom: 0.2rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                color: #5c5c5c;
              }

              p {
                font-size: 0.13rem;
                color: #BD9960;
                line-height: 1;
              }
            }
          }
        }
      }
    }

    .recommend {
      background: url('./../../assets/img/recommend_bg.jpg') no-repeat;
      background-size: 100% auto;
      padding: 0.75rem 0.1rem 0;

      h3 {
        color: #fff;
        font-size: 0.23rem;
        font-weight: bold;
        padding: 0.25rem 0 0.1rem;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: 48%;
          padding: 0.03rem;
          border-radius: 0.05rem;

          a {
            padding: 0.07rem;
            display: flex;
            flex-direction: column;
            background: #fff;
            align-items: center;
            box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);

            .img {
              width: 1.6rem;
              height: 1.6rem;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .pro_name {
              color: #5c5c5c;
              font-size: 0.14rem;
              margin-bottom: 0.03rem;
              white-space: normal;
              line-height: 0.2rem;
              height: 0.4rem;
              width: 1.6rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            p {
              margin-top: 0.22rem;
              color: #BD9960;
              font-size: 0.12rem;
              text-align: left;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import HomeTab from "./HomeTab";
import HomeSwiper from "./HomeSwiper";
import request from "@/utils/request";
export default {
  components: {
    HomeTab,
    HomeSwiper
  },
  data() {
    return {
      manageArr1: [],
      manageArr2: [],
      recommendData: []
    };
  },

  methods: {
    handleScroll(e) {
      // console.log(e.target.scrollTop)
      if (!e.target.scrollTop) {
        // console.log(this.$children[0].$el.style)
        // this.$children[0].$el.style.background =
        //   "url(./../../assets/img/home_top_bg1.jpg)";
      } else {
        // this.$children[0].$el.style.background = "#fff";
      }
    }
  },

  async mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    const recommendRes = await request({
      url: "/index.php",
      method: "GET",
      params: {
        r: "class/cyajaxsub",
        page: 1,
        cid: 119,
        px: "t",
        cac_id: ""
      }
    });
    const manageRes = await request({
      url: "/index.php",
      method: "GET",
      params: {
        r: "class/cyajaxsub",
        page: 1,
        cid: 119,
        px: "t",
        cac_id: ""
      }
    });
    // console.log("jwjwjwj", recommendRes.data.data.content);
    const startData = manageRes.data.data.content;
    this.manageArr1 = startData.splice(0, 2);
    this.manageArr2 = startData.splice(0, 4);
    this.recommendData = recommendRes.data.data.content;
  }
};
</script>