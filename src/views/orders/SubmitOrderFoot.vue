<template>
  <div class="calc">
    <div class="sum_price">
      <h3>
        合计：
        <span>{{allPrice | current}}</span>
      </h3>
    </div>
    <div class="submitOrder" @click="submitOrder">提交订单</div>
  </div>
</template>
<script>
// import request from "@/utils/request.js";
import { setStorage, removeStorage } from "@/utils/storage";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      // price: this.$attrs.allPrice
    };
  },
  props: ["allPrice", "orderInfo"],
  methods: {
    submitOrder() {
      setStorage("orderInfo", this.orderInfo);
      Toast.success("购买成功");
      removeStorage("shopcar");
      removeStorage(" shopcar");
      removeStorage("shopcheck");

      // const data = getStorage("shopcar");
      // data.map(el => {
      //   console.log("el", el);
      //   for (const key in el) {
      //     el[key].map((elm, index) => {
      //       if (elm.checked) {
      //         console.log(el[key]);
      //         el[key].splice(index, 1);
      //       }
      //     });
      //     if (el[key].length == 0) {
      //       data.splice(el[key], 1);
      //     }
      //   }
      // });
      // setStorage("shopcar", data);
    }
  }
};
</script>
<style lang="stylus" scoped>
.calc {
  height: 0.5rem;
  display: flex;
  padding: 0 0 0 0.15rem;

  .sum_price {
    flex: 253;
    height: 100%;
    display: flex;
    align-items: center;

    h3 {
      color: #555;
      font-size: 0.15rem;

      span {
        color: #bd9960;
      }
    }
  }

  .submitOrder {
    height: 100%;
    color: #fff;
    background: #bbb;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 122;
  }
}
</style>