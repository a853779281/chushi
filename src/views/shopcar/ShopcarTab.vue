<template>
  <div class="shopcar_tab">
    <van-icon name="arrow-left" id="back" @click.native="back" />
    <h3>购物车</h3>
    <van-icon name="ellipsis" id="more" />
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.shopcar_tab {
  display: flex;
  width: 100%;
  height: 0.53rem;
  align-items: center;
  background: #f2f2f2;
  padding: 0 0.15rem;
  box-sizing: border-box;
  justify-content: space-between;

  #back {
    font-size: 0.2rem;
  }

  #more {
    font-weight: bold;
    font-size: 0.25rem;
  }
}
</style>

