<template>
  <div class="recommend">
    <RecommendTab></RecommendTab>
    <div class="wrap">
      <ul>
        <li v-for="item of recommend" :key="item.id">
          <a href>
            <div class="img">
              <img :src="item.pic" alt />
            </div>
            <div class="pro_name">{{ item.d_title }}</div>
            <p>{{ item.jiage | current }}</p>
          </a>
        </li>
        <div class="pull_up" v-if="f">
          <h3>我也是有底线的哦</h3>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import RecommendTab from "./RecommendTab";
import BScroll from "better-scroll";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    RecommendTab
  },
  data() {
    return {
      f: false
    };
  },
  computed: {
    //返回的数组
    ...mapState({
      recommend: state => state.recommendStore.recommendList
    })
  },
  methods: {
    ...mapActions(["recomList", "recomNew"])
  },
  mounted() {
    var count = 1;
    this.recomList(); //需要调用执行
    const bs = new BScroll(".wrap", {
      click: true,
      pullUpLoad: {
        threshld: 50
      }
    }); //第三方插件实例化
    bs.on("pullingUp", () => {
      //   console.log("shangla");
      count++;
      if (count < 3) {
        this.recomNew(count);
        bs.finishPullUp();
        return;
      }
      if (count == 3) {
        this.f = true;
        // console.log("到底");
        bs.finishPullUp();
        return;
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.recommend {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .wrap {
    flex: 1;
    overflow: hidden;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .pull_up {
        display: flex;
        height: 0.3rem;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

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
</style>