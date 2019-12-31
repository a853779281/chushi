<template>
  <div class="detailsgoods">
    <!-- swipe start -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        假装有图片
        <img src alt />
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- swipe end -->

    <!-- goods-detail start -->
    <div class="goodsDetails">
      <div class="title">
        <van-tag type="warning">自营</van-tag>
        <span class="title">手剥</span>
        <span>
          <i class="fas fa-share-alt"></i>分享
        </span>
      </div>
      <div class="specifications">
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '20%' }" />
      </div>
    </div>

    <!-- goods-detail end -->
  </div>
</template>



<script>
import { mapState, mapActions } from "vuex";
export default {
  // props: ["goods"],
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.getgoods(this.$route.params.id);
  },
  computed: {
    ...mapState({
      goods: status => status.detailsGoods.goods
    })
  },
  methods: {
    ...mapActions(["getgoods"]),
    showPopup() {
      this.show = true;
    }
  }
};
</script>




<style lang="stylus" scoped>
.detailsgoods {
  height: 100%;

  .van-swipe {
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background: lightblue;
  }
}
</style>