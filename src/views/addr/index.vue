<template>
<<<<<<< HEAD
  <div class="wrap">
    <addrTop />
    <div class="addr">
      <p>您还没有添加过收获地址</p>
      <p>正确填写收获地址方便购物</p>
=======
    <div class="wrap">
        <addrTop/>
        <AddAddr/>
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import AddAddr from './addAddr'
import addrTop from "./addrTop"
export default {
    components: {
        addrTop,
        AddAddr,
    },
}
</script>

<style lang="stylus" scoped>
.wrap 
    height 100% 
    display flex
    flex-direction column
>>>>>>> 3731a31c08eeef6400e012c096ba85c3b42c0184
</style>
