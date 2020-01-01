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
            <li v-for="item of carlist" :key="item.id">
              <van-checkbox
                v-model="item.shopChecked"
                @change="shopChecked(item.id)"
              >{{ item.shop_name }}</van-checkbox>
              <div class="content">
                <van-checkbox v-model="item.checked" @change="checked(item.id)"></van-checkbox>
                <van-card
                  :num="item.num"
                  :price="item.jiage"
                  :desc="item.cate_name"
                  :title="item.title"
                  :thumb="item.pic"
                >
                  <div slot="footer">
                    <van-stepper
                      v-model="item.num"
                      integer
                      @change="changeCount(item.id,item.num,item.jiage)"
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
      sum: 0
    };
  },
  updated() {
    this.sumPrice();
    this.List();
  },
  methods: {
    List() {
      let goods = getStorage("shopcar");
      let shopname = [];
      goods.map(el => {
        shopname.push(el.shop_name);
        for (let i = 0; i < goods.length; i++) {
          console.log(1);
        }
      });
      this.shopName = [...new Set(shopname)];

      //   for (let i = 0; i < goods.length; i++) {
      //     for (let j = i + 1; j < goods.length; j++) {
      //       if (goods[i].shop_name == goods[j].shop_name) {
      //         console.log(i, j);
      //         arr.push(goods[i]);
      //       }
      //     }
      //     console.log(arr);
      //   }
    },
    changeCount(id, num, price) {
      //传参
      const data = getStorage("shopcar");
      data.map(elm => {
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
    shopChecked(id) {
      //店铺选中
      const data = getStorage("shopcar");
      data.map(elm => {
        if (elm.id == id) {
          elm.shopChecked = !elm.shopChecked;
        }
      });
      setStorage("shopcar", data);
      this.checked(id);
      // bus.$emit('checked',id)
    },
    checked(id) {
      //商品选中
      const data = getStorage("shopcar");
      data.map(elm => {
        if (elm.id == id) {
          elm.checked = !elm.checked;
        }
      });
      setStorage("shopcar", data);
    },
    allChecked() {
      this.carlist.map(elm => {
        elm.shopChecked = !this.allCK;
        elm.checked = !this.allCK;
      });
    },
    sumPrice() {
      let p = 0;
      let carlist = getStorage("shopcar");
      carlist.map(elm => {
        if (elm.checked) {
          p += elm.sum;
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