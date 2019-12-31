<template>
  <div class="detailsgoods">
    <!-- swipe start -->
    <div class="imgbox">
      <img :src="goods.pic" alt />
    </div>
    <!-- swipe end -->

    <!-- goods-detail start -->
    <div class="goodsDetails">
      <div class="title">
        <van-tag type="warning">自营</van-tag>
        <span class="title">{{goods.d_title}}</span>
        <span>
          <i class="fas fa-share-alt"></i>分享
        </span>
      </div>
      <div class="price">
        <span>{{goods.jiage |current}}</span>
        <del>{{goods.yuanjia |current}}</del>
        <b>库存： {{goods.sellnum}} 件</b>
      </div>
    </div>
    <!-- goods-detail end -->
  </div>
</template>



<script>
export default {
  data() {
    return {
      goods: this.$attrs.goodsList,
      show: false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>




<style lang="stylus" scoped>
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
    // height: rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>