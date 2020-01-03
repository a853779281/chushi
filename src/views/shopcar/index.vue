<template>
  <div class="shopcar">
    <ShopcarTab></ShopcarTab>
    <div class="shopcar_body">
      <div class="shopcar">
        <div v-if="f">
          <h3>购物车空空如也</h3>
        </div>
        <div v-else class="car_container">
          <ul>
            <li v-for="(item,index) of carlist" :key="index">
              <van-checkbox
                v-model="shopNameCheck[index]"
                @change="shopChecked(index,shopName[index])"
              >{{ shopName[index] }}</van-checkbox>
              <div class="content" v-for="el of item[shopName[index]] " :key="el.id">
                <van-checkbox v-model="el.checked" @change="checked(el.id,index)"></van-checkbox>
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
                      @change="changeCount(el.id,el.num,el.jiage,index)"
                    />
                  </div>
                </van-card>
              </div>
            </li>
          </ul>
          <van-submit-bar :price="sum" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="allCK" @click="allChecked">全选</van-checkbox>
          </van-submit-bar>
        </div>
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
      carlist: getStorage("shopcar"),
      allList: [],
      shopName: [],
      allCK: false,
      sum: 0,
      shopNameCheck: [],
      test: false,
      selected: []
    };
  },
  updated() {
    this.sumPrice();
    const f = this.shopNameCheck.every(el => el == true);
    if (f) {
      this.allCK = true;
    } else {
      this.allCK = false;
    }
  },
  methods: {
    List() {
      let goods = getStorage("shopcar");
      let shopname = [];
      goods.map(el => {
        for (let key in el) {
          shopname.push(key);
        }
      });
      this.shopName = shopname;
    },
    changeCount(id, num, price, index) {
      //传参
      const data = getStorage("shopcar");
      data[index][this.shopName[index]].map(elm => {
        if (elm.id == id) {
          elm.num = num;
          elm.sum = num * price;
        }
      });
      setStorage("shopcar", data);
    },
    onSubmit() {
      const data = getStorage("shopcar");
      let id = 1;
      let arr = [];
      data.map(el => {
        for (const key in el) {
          el[key].map(elm => {
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
        }
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

    shopChecked(index, name) {
      //店铺选中
      const data = getStorage("shopcar");
      data[index][name].map(el => {
        el.checked = this.shopNameCheck[index];
      });
      this.carlist[index][name].map(el => {
        el.checked = this.shopNameCheck[index];
      });
      setStorage(" shopcar", this.carlist);
      setStorage("shopcheck", this.shopNameCheck);
    },
    cbox() {
      const checked = getStorage("shopcheck");
      let arr = [];
      if (checked.length) {
        console.log(checked);
        arr = checked;
      } else {
        const data = getStorage("shopcar");
        data.map(el => {
          console.log(el);
          arr.push(false);
        });
      }
      this.shopNameCheck = arr;
      setStorage("shopcheck", arr);
    },
    checked(id, index) {
      //商品选中
      const data = getStorage("shopcar");
      data[index][this.shopName[index]].map(elm => {
        if (elm.id == id) {
          elm.checked = !elm.checked;
        }
      });
      const f = data[index][this.shopName[index]].every(
        el => el.checked == true
      );
      f
        ? (this.shopNameCheck[index] = true)
        : (this.shopNameCheck[index] = false);
      setStorage("shopcar", data);
    },
    allChecked() {
      for (let i = 0; i < this.shopNameCheck.length; i++) {
        this.shopNameCheck[i] = !this.allCK;
      }
    },
    sumPrice() {
      let p = 0;
      let goods = getStorage("shopcar");
      goods.map(el => {
        for (let key in el) {
          el[key].map(el => {
            if (el.checked) {
              p += el.sum;
            }
          });
        }
      });
      this.sum = p * 100;
    }
  },
  mounted() {
    const data = getStorage("shopcar");
    if (data.length) {
      this.f = false;
    }
    this.sumPrice();
    this.List();
    this.cbox();
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

    .car_container {
      padding: 0.1rem;

      ul {
        li {
          background: #fff;
          border-radius: 0.1rem;
          margin-bottom: 0.15rem;
          padding: 0.1rem;

          .content {
            display: flex;

            .van-checkbox {
              width: 20%;
            }

            .van-card {
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>