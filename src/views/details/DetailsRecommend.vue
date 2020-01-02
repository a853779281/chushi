<template>
  <div class="recommend">推荐</div>
</template>



<script>
export default {
  props: ["goodsList"]
};
</script>



<style lang="stylus" scoped>
.recommend {
  height: 100%;
  overflow: auto;
  background: #fff;
  padding-bottom: 0.5rem;
}
</style>