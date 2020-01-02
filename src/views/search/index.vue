<template>
<<<<<<< HEAD
  <div class="search">
    <div class="search-box">
      <span class="fas fa-angle-left" @click="fanhui"></span>
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" label="宝贝" @click="onSearch"></van-search>
      <router-link
        :to="{
          name:'searchList',
          params:{
          val:value
            }}
      "
      >搜索</router-link>
=======
    <div class="search">
        <div class="search-box">
        <span class="fas fa-angle-left" @click="fanhui"></span>
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            shape="round"
            label="宝贝"
            @click="onSearch"
        >
  
</van-search>
<router-link :to= "{
    name:'address'
}"> 搜索</router-link>
</div>
<div slot="action" @click="onSearch" class="search-bottom">
    <p class="hot">热门搜索</p>
    <p class="search-val">黑巨里</p>
</div>
>>>>>>> lijiale
    </div>
    <div slot="action" @click="onSearch" class="search-bottom">
      <p class="hot">热门搜索</p>
      <p class="search-val">黑巨里</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch() {},
    fanhui() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      value: "",
      flag: false,
      f: false
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '~assets/stylesheets/input.css';
@import '~assets/stylesheets/border.styl';

.search {
  background: #f6f6f6;
  flex: 1;
  height: 100%;

  .search-box {
    background: #fff;
    display: flex;
    height: 0.45rem;
    width: 100%;
    border: 0 0 1px 0, #696969;

    .van-search {
      .van-search__content {
        width: 2.75rem;

        .van-field__body {
          height: 100%;

          input {
            height: 100%;
            vertical-align: middle;
          }
        }
      }
    }

    .fa-angle-left:before {
      line-height: 0.45rem;
      margin-left: 0.15rem;
      font-size: 0.2rem;
    }

    a {
      font-size: 0.12rem;
      line-height: 0.45rem;
      margin: 0 0.05rem;
      color: #444;
    }
  }
}

.search-bottom {
  width: 100%;
  height: 1rem;
  background: #fff;

  .hot {
    padding: 0.12rem;
    font-size: 0.15rem;
  }

  .search-val {
    font-size: 0.12rem;
    padding: 0.1rem 0;
    background: #f6f6f6;
    width: 0.628rem;
    border-radius: 0.1rem;
    text-align: center;
    margin-left: 0.1rem;
  }
}
</style>
