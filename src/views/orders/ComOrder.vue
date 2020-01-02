<template>
  <div class="ComOrderHead">
    <i class="fas fa-chevron-left" @click="goShopCar"></i>
    <h3>确认订单</h3>
    <van-icon name="ellipsis" id="more" />
  </div>
</template>

<script>
export default {
  methods: {
    goShopCar() {
      this.$router.push("shopcar");
    }
  }
};
</script>
<style lang="stylus" scoped>
.ComOrderHead {
  display: flex;
  width: 100%;
  height: 0.53rem;
  align-items: center;
  background: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;

  i {
    color: #444;
    width: 0.24rem;
  }

  h3 {
    flex: 1;
    text-align: center;
    color: #444;
  }

  #more {
    width: 0.24rem;
    font-weight: bold;
    font-size: 0.25rem;
    color: #444;
  }
}
</style>