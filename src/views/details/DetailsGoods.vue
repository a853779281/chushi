<template>
  <div class="detailsgoods">
    <!-- swipe start -->
    <div class="imgbox">
      <img :src="goodsList.pic" alt />
    </div>
    <!-- swipe end -->

    <!-- goods-detail start -->
    <div class="goodsDetails">
      <div class="title-box">
        <!-- <van-tag type="warning">自营</van-tag> -->
        <span class="title">{{goodsList.d_title}}</span>
        <span class="share">
          <i class="fas fa-share-alt"></i>分享
        </span>
      </div>
      <div class="price-box">
        <span>{{goodsList.jiage |decimals }}</span>
        <del>{{goodsList.yuanjia |decimals}}</del>
        <b>库存：{{goodsList.sellnum}} 件</b>
      </div>
    </div>
    <div class="buynum">
      <span>购买数量</span>
      <van-stepper v-model="num" class />
    </div>
    <!-- goods-detail end -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click.native="goService" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click.native="goShopCar" />
      <van-goods-action-button type="warning" text="加入购物车" @click.native="addShopCar" />
      <van-goods-action-button type="danger" text="立即购买" @click.native="goBuyer" />
    </van-goods-action>
  </div>
</template>



<script>
import { getStorage, setStorage } from "@/utils/storage.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      goodsList: this.$attrs.goodsList,
      show: false,
      num: 1,
      sum: this.$route.query.jiage,
      getGoods: []
    };
  },
  mounted() {},
  computed: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    goService() {
      this.$router.push("Service");
    },
    goShopCar() {
      this.$router.push("/shopcar");
    },
    goBuyer() {
      this.$router.push("Buyer");
    },
    addShopCar() {
      Toast("亲！成功加入购物车~");
      const goods = getStorage("shopcar");
      if (goods.length != 0) {
        const f = goods.some(el => {
          return el[this.$route.query.shop_name];
        });
        if (f) {
          goods.map(el => {
            // 判断是否 是这家店
            if (el[this.$route.query.shop_name]) {
              console.log("是这家店");
              //1.是这家店
              //2.判断 存储的这家店 是否有这款商品
              let flag = el[this.$route.query.shop_name].some(el => {
                return el.id == this.$route.params.id;
              });
              if (flag) {
                console.log("这家店 有这款商品");
                el[this.$route.query.shop_name].map(elm => {
                  if (elm.id == this.$route.params.id) {
                    console.log("===");
                    elm.num += this.num;
                    elm.sum = this.sum;
                    return;
                  }
                });
              } else {
                console.log("这家店没有这款商品");
                el[this.$route.query.shop_name].push({
                  ...this.$route.query,
                  num: this.num,
                  checkboxflag: true,
                  sum: this.sum,
                  checked: false
                });
              }
            }
            // console.log(el[this.$route.query.shop_name], flag);
          });
          console.log("有商品，有这家店的商品");
        } else {
          console.log("有商品，但没有这家店的商品");
          let list = {
            [this.$route.query.shop_name]: []
          };
          list[this.$route.query.shop_name].push({
            ...this.$route.query,
            num: this.num,
            checkboxflag: true,
            sum: this.sum,
            checked: false
          });
          goods.push(list);
        }
      } else {
        console.log(2, "else");
        let list = {
          [this.$route.query.shop_name]: []
        };
        list[this.$route.query.shop_name].push({
          ...this.$route.query,
          num: this.num,
          checkboxflag: true,
          sum: this.sum,
          checked: false
        });
        goods.push(list);
      }
      console.log("goods", goods);
      setStorage("shopcar", goods);
    }
  },
  watch: {
    num() {
      this.sum = this.num * this.$route.query.jiage;
    }
  }
};
</script>




<style lang="stylus" scoped>
@import '~assets/stylesheets/border.styl';

.detailsgoods {
  height: 100%;
  overflow: auto;

  .van-swipe {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background: lightblue;
  }

  .imgbox {
    width: 100%;
    height: 3.75rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .goodsDetails {
    background: #fff;

    .title-box {
      padding: 0.1rem;
      display: flex;
      justify-content: space-between;

      .title {
        width: 80%;
        overflow: hidden;
        letter-spacing: 0.01rem;
        font-size: 0.15rem;
      }

      .share {
        float: right;
        text-align: right;
        font-size: 0.13rem;
        line-height: 0.16rem;

        i {
          color: #BD9960;
          font-size: 0.18rem;
          margin-right: 0.04rem;
        }
      }
    }

    .price-box {
      padding: 0 0.05rem 0.1rem;

      span {
        color: #BD9960;
        font-size: 0.2rem;
      }

      del {
        color: #bcbcbc;
        margin-left: 0.05rem;
      }

      b {
        font-size: 0.13rem;
        float: right;
        line-height: 0.2rem;
      }
    }
  }

  .buynum {
    background: #fff;
    display: flex;
    // border: 1px 0 0 0, #ccc;
    padding: 0.05rem;
    display: flex;
    justify-content: space-between;

    span {
      line-height: 0.28rem;
      font-size: 0.18rem;
    }
  }
}
</style>