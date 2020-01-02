<template>
  <div class="detailsImg">
    <img :src="goodsList.pic" alt />
    <img :src="goodsList.super_pic" alt />
  </div>
</template>

<script>
export default {
  props: ["goodsList"]
};
</script>



<style lang="stylus" scoped>
.detailsImg {
  height: 100%;
  overflow: auto;
  background: #fff;
  padding-bottom: 0.5rem;

  img {
    width: 100%;
  }
}
</style>