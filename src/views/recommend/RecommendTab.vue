<template>
  <div class="recommendHead">
    <i class="fas fa-chevron-left" @click="goHome"></i>
    <h3>新品推荐</h3>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("home");
    }
  }
};
</script>
<style lang="stylus" scoped>
.recommendHead {
  display: flex;
  width: 100%;
  height: 0.53rem;
  align-items: center;
  background: #f2f2f2;
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
}
</style>