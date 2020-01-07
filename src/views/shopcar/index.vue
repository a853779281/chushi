<template>
  <div class="shopcar">
    <ShopcarTab></ShopcarTab>
    <div class="shopcar_body">
      <div v-if="f">
        <h3>购物车空空如也</h3>
      </div>
      <div v-else class="car_container">
        <ul>
          <li v-for="(item, index) of goods" :key="item.shopId">
            <van-checkbox
              class="shop_name"
              v-model="item.shopFlag"
              @change="Checked()"
            >{{ item.shopname }}</van-checkbox>

            <van-swipe-cell v-for="el of item.goodsList" :key="el.id">
              <template slot="left">
                <van-button square type="primary" text="选择" />
              </template>
              <div class="content">
                <van-checkbox v-model="el.checked" @change="sigleChecked(index, el.id)"></van-checkbox>
                <van-card
                  :num="el.num"
                  :price="el.jiage"
                  :desc="el.cate_name"
                  :title="el.title"
                  :thumb="el.pic"
                >
                  <div slot="footer">
                    <van-stepper
                      v-model="el.num"
                      integer
                      @change="changeCount(el.id, el.num, el.jiage, index)"
                    />
                  </div>
                </van-card>
              </div>

              <template slot="right" class="del-right">
                <van-button square type="danger" text="删除" @click.native="del(el.id, index)" />
                <van-button
                  square
                  type="primary"
                  text="收藏"
                  @click.native="collection(el.id, index)"
                />
              </template>
            </van-swipe-cell>
          </li>
        </ul>
        <van-submit-bar :price="sum" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="allCK" @change="allChecked">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "@/utils/request.js";
// import Vue from "vue";
// import VueBus from "vue-bus";
import { getStorage, setStorage } from "@/utils/storage";

import ShopcarTab from "./ShopcarTab";
// Vue.use(VueBus);
export default {
  components: {
    ShopcarTab
  },
  data() {
    return {
      f: true,
      goods: getStorage(" shopcar"),
      allCK: false,
      sum: 0
    };
  },
  mounted() {
    // 判断是否有商品
    const data = getStorage(" shopcar");
    const allChecked = getStorage(" allChecked");
    if (data.length) {
      this.f = false;
    }
    if (allChecked.checked) {
      this.allCK = allChecked;
    }
    this.sumPrice();
  },
  updated() {
    this.sumPrice();
  },
  methods: {
    collection(id, index) {
      let collectionArr = getStorage("collection");
      let f = collectionArr.some(el => el.pid == id);
      if (!f) {
        this.goods[index].goodsList.map(elm => {
          if (id == elm.id) {
            collectionArr.push({
              pid: elm.id,
              shopid: elm.brand_id,
              shopname: elm.shop_name,
              title: elm.title,
              price: elm.jiage,
              num: elm.num,
              sum: elm.sum,
              info: elm.cate_name,
              address: "",
              pic: elm.pic,
              oid: ""
            });
          }
        });
      }
      setStorage("collection", collectionArr);
    },
    onSubmit() {
      const data = getStorage(" shopcar");
      let id = 1;
      let arr = [];
      data.map(el => {
        el.goodsList.map(elm => {
          if (elm.checked) {
            arr.push({
              uid: `${id}`,
              pid: elm.id,
              shopid: elm.brand_id,
              shopname: elm.shop_name,
              title: elm.title,
              price: elm.jiage,
              num: elm.num,
              sum: elm.sum,
              info: elm.cate_name,
              address: "",
              pic: elm.pic,
              oid: ""
            });
            id++;
          }
        });
      });
      this.selected = arr;
      this.$router.push({
        name: "CommitOrder",
        path: "CommitOrder",
        params: {
          data: JSON.stringify(this.selected)
        }
      });

      // bus.$emit("receiveData", arr);
    },
    changeCount(id, num, price, index) {
      const data = getStorage(" shopcar");
      data[index].goodsList.map(elm => {
        if (elm.id == id) {
          elm.num = num;
          elm.sum = num * price;
        }
      });
      setStorage(" shopcar", data);
    },
    Checked() {
      // 店铺选中
      this.goods.forEach(el => {
        el.goodsList.map(elm => {
          elm.checked = el.shopFlag;
        });
      });
      setStorage(" shopcar", this.goods);
    },
    del(id, index) {
      // 删除
      this.goods[index].goodsList.map((el, i) => {
        if (el.id == id) {
          this.goods[index].goodsList.splice(i, 1);
        }
      });
      if (!this.goods[index].goodsList.length) {
        this.goods.splice(index, 1);
      }
      setStorage(" shopcar", this.goods);
    },
    sigleChecked(index) {
      // 单选
      let flagTrue = this.goods[index].goodsList.every(el => {
        return el.checked == true;
      });
      if (flagTrue) {
        this.goods[index].shopFlag = true;
      } else {
        this.goods[index].shopFlag = false;
      }
      let fAll = this.goods.every(el => {
        return el.shopFlag == true;
      });
      fAll ? (this.allCK = true) : (this.allCK = false);
      setStorage(" shopcar", this.goods);
      localStorage.setItem(
        " allChecked",
        JSON.stringify({ checked: this.allCK })
      );
    },
    allChecked() {
      this.goods.forEach(el => {
        el.shopFlag = this.allCK;
      });
      localStorage.setItem(
        " allChecked",
        JSON.stringify({ checked: this.allCK })
      );
    },
    sumPrice() {
      let p = 0;
      let goods = getStorage(" shopcar");
      goods.map(el => {
        el.goodsList.map(elm => {
          if (elm.checked) {
            p += elm.sum;
          }
        });
      });
      this.sum = p * 100;
    }
  }
};
</script>
<style lang="stylus" scoped>
.shopcar {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: #fafafa;

  .shopcar_body {
    width: 100%;
    flex: 1;
    overflow: auto;
    display: flex;

    .car_container {
      padding: 0.1rem;
      flex: 1;
      overflow: auto;

      ul {
        li {
          background: #fff;
          border-radius: 0.1rem;
          margin-bottom: 0.15rem;
          padding: 0.1rem;

          .shop_name {
            margin-bottom: 0.05rem;
          }

          .van-swipe-cell__right, .van-swipe-cell__left {
            .van-button--square {
              height: 100%;
            }
          }

          .content {
            display: flex;

            .van-checkbox {
              width: 20%;
              display: flex;
              justify-content: center;
            }

            .van-card {
              background: #fff;
            }
          }
        }
      }

      .van-submit-bar {
        bottom: 0.5rem !important;
      }
    }
  }
}
</style>
