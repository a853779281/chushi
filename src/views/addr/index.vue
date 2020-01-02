<template>
  <div class="wrap">
    <addrTop />
    <div class="addr">
      <p>您还没有添加过收获地址</p>
      <p>正确填写收获地址方便购物</p>
    </div>
  </div>
</template>

<script>
import addrTop from "./addrTop";
export default {
  components: {
    addrTop
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  height: 100%;

  .addr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>
