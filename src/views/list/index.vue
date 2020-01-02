<template>
  <div class="list">
    <ListTab />

    <div class="list_body">
      <div class="select_nav">
        <div class="select_nav_left">
          <van-dropdown-menu active-color="#BD9960" :overlay="false">
            <van-dropdown-item v-model="value" :options="option" />
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item title="筛选" ref="item">
              <van-switch-cell v-model="switch1" title="包邮" />
              <van-switch-cell v-model="switch2" title="团购" />
              <van-button block type="info" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
      <ul class="goods_list">
        <li v-for="(item, index) in dataList" :key="index">
          <div class="img_box">
            <img :src="item.common_image" :alt="item.common_name" />
          </div>
          <div class="content_box">
            <h1>{{item.common_name}}</h1>
            <span class="price">
              ￥
              <b class="price_num">{{item.common_price}}</b>
            </span>
            <div class="common_footer">
              <span class="common_salenum">销量 {{item.common_salenum}}</span>
              <span class="common_evaluate">评论 {{item.common_evaluate}}</span>
            </div>
          </div>
        </li>
      </ul>
      <!--  -->
    </div>
  </div>
</template>


<script>
import ListTab from "./ListTab";
import request from "@/utils/request.js";
export default {
  components: {
    ListTab
  },
  data() {
    return {
      value: 0,
      value1: 0,
      value2: "a",
      switch1: false,
      switch2: false,
      option: [
        { text: "综合排序", value: 0 },
        { text: "评价排序", value: 1 },
        { text: "价格从低到高", value: 2 },
        { text: "价格从高到低", value: 3 }
      ],
      option1: [{ text: "销量优先", value: 0 }, { text: "价格优先", value: 1 }],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      dataList: []
    };
  },
  async mounted() {
    const data = await request({
      url: "/index.php",
      params: {
        ctl: "Goods_Goods",
        met: "goodslist",
        typ: "json",
        ua: "wap",
        sub_site_id: 0,
        cat_id: this.$route.params.id,
        pagesize: 10,
        curpage: 1,
        firstRow: 0,
        pos: 1
      }
    });
    this.dataList = data.data.data.items;
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .list_body {
    width: 100%;
    flex: 1;
    overflow: auto;

    .select_nav {
      width: 100%;
      position: fixed;
    }

    .goods_list {
      margin-top: 0.5rem;

      li {
        display: flex;

        .img_box {
          width: 0.88rem;
          height: 0.88rem;
          padding: 0.1rem;

          img {
            width: 0.88rem;
            height: 0.88rem;
          }
        }

        .content_box {
          padding: 0.1rem 0.1rem;
          margin-right: 0.1rem;

          h1 {
            font-size: 0.143rem;
            line-height: 0.2rem;
            white-space: 0.1rem;
            word-wrap: break-word;
            color: #111;
            margin-bottom: 0.15rem;
          }

          .price {
            color: #BD9960;
            font-size: 0.13rem;

            .price_num {
              font-size: 0.176rem;
            }
          }

          .common_footer {
            margin-top: 0.1rem;

            .common_salenum {
              font-size: 0.11rem;
              color: #999;
              display: inline-block;
              width: 1rem;
            }

            .common_evaluate {
              font-size: 0.11rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>