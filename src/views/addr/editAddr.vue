<template>
  <div>
    <div class="top">
      <i class="fas fa-chevron-left" @click="goBack"></i>
      <span>地址管理</span>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      :show-delete="flag"
      :show-set-default="flag"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from "@/utils/addr.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      flag: false
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSave(content) {
      Toast("save");
      this.$store.dispatch("addr", content);
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
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
  }

  span {
    flex: 1;
    color: #333;
    font-size: 0.2rem;
  }
}
</style>
