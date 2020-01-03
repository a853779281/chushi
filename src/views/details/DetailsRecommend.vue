<template>
  <div class="recommend">
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
    <h3>别拉了，到底了</h3>
  </div>
</template>



<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      recommendData: []
    };
  },
  props: ["goodsList"],
  async mounted() {
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
    this.recommendData = recommendRes.data.data.content;
  }
};
</script>



<style lang="stylus" scoped>
.recommend {
  height: 100%;
  overflow: auto;
  background: #fff;
  padding-bottom: 0.02rem;

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

  h3 {
    padding-top: 0.1rem;
    text-align: center;
    color: #333;
    font-size: 0.14rem;
    font-weight: normal;
  }
}
</style>