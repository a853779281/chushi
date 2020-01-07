<template>
  <div class="list_tab">
    <van-icon name="arrow-left" id="back" @click.native="back" />
    <ul>
      <li></li>
    </ul>
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
@import '~@/assets/stylesheets/border.styl';

.list_tab {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.44rem;
  align-items: center;
  background: #f2f2f2;
  padding: 0 0.15rem;
  box-sizing: border-box;
  background: #fff;
  border: 0 0 1px 0, #ccc;

  #back {
    font-size: 0.2rem;
  }

  ul {
    display: flex;
    width: 70%;
    text-align: center;

    li {
      font-size: 0.18rem;
      width: 25%;
      line-height: 0.43rem;
      box-sizing: border-box;
      margin: 0 0.1rem;
      border-bottom: 1px transparent solid;

      &.active {
        color: #BD9960;
        border-bottom: 1px #BD9960 solid;
      }
    }
  }

  #more {
    font-weight: bold;
    font-size: 0.25rem;
  }

}
</style>
