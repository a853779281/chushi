<template>
  <div class="list_tab">
    <h3>List</h3>
    <img src="../../assets/img/ico/ia_100000002.png" alt />
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylesheets/border.styl';

.list_tab {
  display: flex;
  width: 100%;
  height: 0.44rem;
  align-items: center;
  background: #f2f2f2;
  padding: 0 0.15rem;
  box-sizing: border-box;
  background: #fff;
  border: 0 0 1px 0, #ccc;

  h3 {
    flex: 355;
    text-align: center;
    font-size: 0.176rem;
    font-weight: 400;
  }

  img {
    flex: 20;
    width: 0.18rem;
    cursor: pointer;
  }
}
</style>