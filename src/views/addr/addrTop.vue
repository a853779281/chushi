<template>
  <div class="top">
    <i class="fas fa-chevron-left" @click="goBack"></i>
    <span>地址管理</span>
    <i class="fas fa-check" @click="saveAddr"></i>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.replace("/mine");
    },
    saveAddr() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.top {
  width: 100%;
  height: 0.5rem;
  background-color: transparent;
  padding: 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  text-align: center;
  background-color: #f4f4f4;
  box-shadow-bottom: 3px;

  .add {
    font-size: 0.35rem;
    line-height: 0.5rem;
  }

  a {
    color: #333;
    font-size: 0.2rem;

    i {
      font-size: 0.16rem;
      line-height: 0.5rem;
    }
  }

  span {
    flex: 1;
    color: #333;
    font-size: 0.2rem;
  }
}
</style>