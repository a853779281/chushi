<template>
  <div class="layout">
    <!-- <Tab></Tab> -->
    <keep-alive :include="$route.meta.include">
      <router-view></router-view>
    </keep-alive>
    <!-- <Mine></Mine> -->
    <TabBar v-if="flag"></TabBar>
  </div>
</template>

<style lang="stylus" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

<script>
import TabBar from "components/TabBar";
// import Tab from 'components/Tab'
// import Mine from '@/views/mine'
export default {
  components: {
    TabBar
  },
  data() {
    return {
      flag: true,
      tabBarFlag: true
    };
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        if (
          this.$route.name == "shop" ||
          this.$route.name == "goods" ||
          this.$route.name == "DetailsGoods" ||
          this.$route.name == "DetailsImg" ||
          this.$route.name == "search" ||
          this.$route.name == "orders" ||
          this.$route.name == "AccountLogin" ||
          this.$route.name == "PhoneLogin" ||
          this.$route.name == "register" ||
          this.$route.name == "forgetPassword" ||
          this.$route.name == "DetailsComments" ||
          this.$route.name == "DetailsRecommend" ||
          this.$route.name == "recommend" ||
          this.$route.name == "searchList" ||
          this.$route.name == "address" ||
          this.$route.name == "CommitOrder"
        ) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      }
    }
  }
};
</script>