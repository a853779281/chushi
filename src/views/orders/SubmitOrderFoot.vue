<template>
  <div class="calc">
    <div class="sum_price">
      <h3>
        合计：
        <span>{{}}</span>
      </h3>
    </div>
    <div class="submitOrder" @click="submitOrder">提交订单</div>
  </div>
</template>
<script>
// import request from "@/utils/request.js";
// import { getStorage } from "@/utils/storage";

export default {
  // data() {
  //   return {
  //     receive: []
  //   };
  // },

  methods: {
    submitOrder() {
      // let arr = [];
      // const data = getStorage("shopcar");
      // const order=getStorage('arr')
      // // console.log("jwjwjw", data);
      // let sameName = {};
      // let repeatShopName = [];
      // let singleShopName = [];
      // data.map(el => {
      //   console.log("el", el);
      //   for (const key in el) {
      //     console.log(key);
      //     el[key].map(elm => {
      //       if (elm.checked) {
      //         // arr.push({
      //         //   elm.shop_name: []
      //         // });
      //         repeatShopName.push(elm.shop_name);
      //         let a = new Set(repeatShopName);
      //         singleShopName = Array.from(a);
      //         if (a.has(elm.shop_name)) {
      //           console.log("有");
      //         }
      //         console.log("你好", singleShopName);
      //         // console.log("elm", elm);
      //         // return elm;
      //       }
      //     });
      //   }
      // });
      // console.log(sameName);
      // request({
      //   url: "/order/add",
      //   method: "POST",
      //   data: { ...arr },
      //   headers: { "Content-Type": "application/json" }
      // });
    }
  }
};

// [
//   {
//     uid: "1234",
//     pid: 24362726,
//     shopname: "舌里旗舰店",
//     title: "舌里红枣夹核桃1000g 新疆大枣子加核桃仁干果夹心零食抱抱年货",
//     price: 31.99,
//     num: 5,
//     sum: 159.95,
//     dec: "枣类制品",
//     address: "",
//     pic:
//       "https://img.alicdn.com/imgextra/i3/2471521096/O1CN01sBrYEN1Jy0exZW7VW_!!2471521096.png"
//   }
// ];
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