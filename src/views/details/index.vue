<template>
  <div class="details">
    <ListTab></ListTab>
    <div class="details_body">
      <!-- <keep-alive :include="$route.meta.include">
        <transition
          mode="out-in"
          enter-active-class="animated slideInLeft"
          leave-active-class="animated slideOutLeft"
        >
          <router-view></router-view>
        </transition>
      </keep-alive>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ListTab from "./ListTab";

export default {
  components: {
    ListTab
  },
  data() {
    return {
      // goods: this.$route.query
    };
  }
};
</script>


<style lang="stylus" scoped>
.details {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .details_body {
    background-color: #f2f2f2;
    width: 100%;
    flex: 1;
    overflow: auto;
    height: 100%;
  }
}
</style>