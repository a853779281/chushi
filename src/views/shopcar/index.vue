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
            <li v-for="(item,index) of carlist" :key="item[shopName[index]][0].brand_id || index">
              <van-checkbox
                class="shop_name"
                v-model="shopNameCheck[index]"
                @change="shopChecked(index,shopName[index])"
              >{{ shopName[index] }}</van-checkbox>

              <van-swipe-cell v-for="el of item[shopName[index]] " :key="el.id">
                <template slot="left">
                  <van-button square type="primary" text="选择" />
                </template>
                <div class="content">
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

                <template slot="right" class="del-right">
                  <van-button
                    square
                    type="danger"
                    text="删除"
                    @click.native="del(el.id,index,shopName[index])"
                  />
                  <van-button square type="primary" text="收藏" />
                </template>
              </van-swipe-cell>
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
import { getStorage, setStorage } from "@/utils/storage";
import ShopcarTab from "./ShopcarTab";
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
      test: false
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
    del(id, i, name) {
      this.carlist[i][name].map((el, index) => {
        if (el.id == id) {
          this.carlist[i][name].splice(index, 1);
        }
      });
      console.log(this.carlist, i);

      if (!this.carlist[i][this.shopName[i]].length) {
        console.log(i);
        this.carlist.splice(i, 1);
      }
      setStorage("shopcar", this.carlist);
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
      // const data = getStorage("shopcar");
      // let arr = [];
      // data.map(el => {
      //   for (const key in el) {
      //     el[key].map(elm => {
      //       if (elm.checked) {
      //         arr.push({
      //           uid: "",
      //           pid: elm.id,
      //           shopname: elm.shop_name,
      //           title: elm.title,
      //           price: elm.jiage,
      //           num: elm.num,
      //           sum: elm.sum,
      //           dec: elm.cate_name,
      //           address: "",
      //           pic: elm.pic
      //         });
      //       }
      //     });
      //   }
      // });
      // request({
      //   url: "/usershoplist",
      //   method: "POST",
      //   data: JSON.stringify(arr),
      //   headers: { "Content-Type": "application/json" }
      // });
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
  watch: {},
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
    }
  }
}
</style>