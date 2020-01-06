<template>
  <div class="confirm">
    <ComOrder></ComOrder>
    <div class="order_body">
      <div class="add_address">
        <h1>+</h1>
        <span>添加收货人信息</span>
      </div>
      <div class="order_box">
        <div class="order_list" v-for="(item,index) of orderData" :key="index">
          <h3>{{item.name}}</h3>
          <ul>
            <li v-for="(elm,index) of item[item.id]" :key="index">
              <a href>
                <div class="img">
                  <img :src="elm.pic" alt="图片区域" srcset />
                </div>
                <div class="desc">
                  <h4>
                    <p>{{elm.title}}</p>
                    <span>{{elm.price | current}}</span>
                  </h4>
                  <p>包装：袋装， 规格：500g</p>
                  <p class="num">x{{elm.num}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <van-cell-group>
          <van-cell title="物流配送" value="￥ 0" />
          <van-cell title="店铺优惠券" value="暂无店铺优惠券>" />
          <van-field
            v-model="message"
            rows="1"
            autosize
            label="买家留言："
            type="textarea"
            placeholder="（选填）本次交易需要卖家注意事项"
          />
          <p class="sum">
            共
            <span>{{sum}}</span>件商品，小计：
            <em>{{calcP | current}}</em>
          </p>
        </van-cell-group>
        <van-cell-group>
          <van-cell title="平台优惠券" is-link value="暂无可用平台优惠券" />
          <van-cell title="支付方式：" value="在线支付" />
          <van-cell title="发票信息：" is-link value="不需要发票" />
        </van-cell-group>
      </div>
    </div>
    <SubmitOrderFoot :allPrice="calcP" :orderInfo="orderData"></SubmitOrderFoot>
  </div>
</template>

<script>
// import request from '@/utils/request'
import ComOrder from "@/views/orders/ComOrder";
import SubmitOrderFoot from "@/views/orders/SubmitOrderFoot";
// import Vue from "vue";
// import VueBus from "vue-bus";
// Vue.use(VueBus);
export default {
  components: {
    ComOrder,
    SubmitOrderFoot
  },
  data() {
    return {
      message: "",
      orderData: JSON.parse(this.$route.params.data),
      sum: 0,
      calcP: 0
    };
  },
  methods: {
    updateData() {
      let sName = [];
      let NewData = [];
      let sum = 0;
      let allPrice = 0;
      this.orderData.forEach(elm => {
        if (!sName.includes(elm.shopname)) {
          sName.push(elm.shopname);
          NewData.push({
            name: elm.shopname,
            id: elm.shopid,
            [elm.shopid]: [
              {
                goodId: elm.pid,
                num: elm.num,
                pic: elm.pic,
                price: elm.sum,
                title: elm.title
              }
            ]
          });
        } else {
          NewData.forEach(el => {
            if (elm.shopid == el.id) {
              el[el.id].push({
                goodId: elm.pid,
                num: elm.num,
                pic: elm.pic,
                price: elm.sum,
                title: elm.title
              });
            }
          });
        }
        sum += elm.num;
        allPrice += elm.sum;
      });

      this.sum = sum;
      this.orderData = NewData;
      this.calcP = allPrice;
    }
  },
  mounted() {
    this.updateData();
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylesheets/border.styl';

.confirm {
  background: #f2f2f2;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;

  .order_body {
    flex: 1;
    overflow: auto;
    height: 100%;

    .add_address {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      user-select: none;
      cursor: pointer;
      height: 0.89rem !important;
      border: 0 0 1px 0, #ccc;
      background: #fff;

      h1 {
        color: #bcbcbc;
        font-size: 0.24rem;
        margin-bottom: 0.15rem;
      }

      span {
        color: #bcbcbc;
        font-size: 0.12rem;
      }
    }

    .order_box {
      box-sizing: border-box;

      .order_list {
        display: flex;
        flex-direction: column;
        margin: 0.2rem 0;
        background: #fff;

        h3 {
          height: 0.44rem;
          border: 1px 0, #ccc;
          line-height: 0.44rem;
          padding: 0 0.1rem;
          color: #222;
          font-size: 0.14rem;
        }

        ul {
          li {
            border: 0 0 1px 0, #ccc;

            a {
              display: flex;
              padding: 0.15rem;

              .img {
                width: 0.89rem;
                height: 0.89rem;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .desc {
                display: flex;
                flex-direction: column;
                flex: 1;
                padding-left: 0.1rem;

                h4 {
                  display: flex;
                  height: 0.26rem;
                  padding-bottom: 0.4rem;
                  justify-content: space-between;

                  p {
                    color: #000;
                    font-size: 0.13rem;
                    width: 64%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                  }

                  span {
                    color: #bd9960;
                    font-size: 0.13rem;
                  }
                }

                p {
                  font-size: 0.09rem;
                  color: #999;
                }

                .num {
                  color: #bd9960;
                  font-size: 0.13rem;
                  text-align: right;
                  padding-right: 0.3rem;
                }
              }
            }
          }
        }
      }

      .van-cell-group {
        margin-bottom: 0.2rem;

        .sum {
          height: 0.44rem;
          text-align: right;
          line-height: 0.3rem;
          padding: 0.1rem 0.16rem;
          box-sizing: border-box;
          font-size: 0.14rem;

          em {
            color: #bd9960;
          }
        }
      }
    }
  }
}
</style>