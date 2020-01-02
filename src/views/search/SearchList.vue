<template>
  <div class="search">
    <div class="search-box">
      <span class="fas fa-angle-left" @click="fanhui"></span>
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" label></van-search>
      <i class="fas fa-list-ul"></i>
    </div>
    <div class="search_list">
      <div class="select_header">
        <span>综合</span>
        <span>价格</span>
        <span>筛选</span>
      </div>
      <div class="list_body">
        <ul class="wrap">
          <li>
            <a href>
              <div class="img">
                <img src alt />
              </div>
              <div class="pro_info">
                <h3></h3>
                <p class="price"></p>
                <p class="sale_comment">
                  <span class="sale">销量 {{}}</span>
                  <span class="comment">评论 {{}}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      searchList: state => state.searchStore.list
    })
  },
  data() {
    return {
      value: this.$route.params.val
    };
  },
  methods: {
    ...mapActions(["searchData"]),
    fanhui() {
      this.$router.go(-1);
    },
    onClick(name, title) {
      this.$toast(title);
    }
  },
  mounted() {
    this.searchData(this.value);
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
    align-items: center;

    .van-search {
      .van-search__content {
        width: 2.9rem;

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

  .search_list {
    background: #fff;

    .select_header {
      display: flex;
      height: 0.42rem;
      border: 0 0 1px 0, #ccc;
      padding: 0 0.15rem 0;
      align-items: center;
      justify-content: space-between;
    }

    .list_body {
      overflow: hidden;

      .wrap {
        display: flex;
        flex-direction: column;

        li {
          a {
            display: flex;
            height: 1.17rem;
            padding: 0.05rem;

            .img {
              flex: 127;
              height: 1.17rem;
            }

            .pro_info {
              flex: 248;

              h3 {
                color: #111;
                font-size: 0.14rem;
              }

              .price {
                color: #000;
                font-size: 0.22rem;
              }

              .sale_comment {
                display: flex;

                .sale {
                  margin-right: 0.2rem;
                  color: #999;
                  font-size: 0.12rem;
                }

                .comment {
                  color: #999;
                  font-size: 0.12rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>