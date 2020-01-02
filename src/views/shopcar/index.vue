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
                v-model="item.checked"
                @change="shopChecked(index,item)"
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
            {{allCK}}
          </van-submit-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      window.console.log(1);
    },
    shopChecked(index, name) {
      //店铺选中
      const data = getStorage("shopcar");
      let arr = [];
      data.map(el => {
        for (const key in el) {
          arr.push({ [key]: false });
        }
      });
      // arr[name]=!arr[name]
      console.log(name);
      console.log(arr[index]);
      setStorage("shopcheck", arr);
      this.shopNameCheck = arr;
    },
    checked(id, index) {
      //商品选中
      const data = getStorage("shopcar");
      data[index][this.shopName[index]].map(elm => {
        if (elm.id == id) {
          elm.checked = !elm.checked;
        }
      });
      setStorage("shopcar", data);
    },
    allChecked() {
      //   this.carlist.map(elm => {
      //     //   elm.shopChecked = !this.allCK;
      //     //   elm.checked = !this.allCK;
      //     console.log(elm);
      //   });
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