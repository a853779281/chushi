<template>
  <div class="comments">
    <ul class="commentsList">
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>

    <div>
      <h1>该商品未收到任何评价</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "全部" },
        { id: 2, name: "好评" },
        { id: 3, name: "中评" },
        { id: 4, name: "差评" },
        { id: 5, name: "带图评价" }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
.comments {
  height: 100%;
  overflow: auto;
  padding-bottom: 0.5rem;

  .commentsList {
    display: flex;
    background: #fff;
    padding: 0.05rem 0;
    align-items: center;

    li {
      width: 20%;
      text-align: center;
      font-size: 0.13rem;
      margin: 0.05rem 0.08rem;
      box-sizing: border-box;
      color: #BD9960;
      border: 1px solid #BD9960;
      border-radius: 0.2rem;
      line-height: 0.25rem;

      &.active {
        color: #fff;
        background: #BD9960;
      }
    }
  }
}
</style>