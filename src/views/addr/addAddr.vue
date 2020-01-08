<template>
  <div class="wrapper">
    <div class="addr" v-if="list.length==0">
      <p class="p1">您还没有添加过收获地址</p>
      <p class="p2">正确填写收获地址方便购物</p>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @click-item="onSelected"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setStorage } from "@/utils/storage";
export default {
  data() {
    return {
      chosenAddressId: "1"
    };
  },
  computed: {
    ...mapState({
      list: state => state.addrStore.list
    })
  },
  methods: {
    onAdd() {
      this.$router.push("/editaddr");
    },
    onSelected(item, index) {
      //   console.log(item, index);
      setStorage("selectedAdd", [
        {
          address: item.address,
          id: item.id,
          name: item.name,
          tel: item.tel
        }
      ]);
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  overflow: auto;
  flex: 1;

  .addr {
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;

    .p1 {
      margin-bottom: 0.1rem;
      font-size: 0.18rem;
      line-height: 0.1rem;
    }

    .p2 {
      color: #999;
    }
  }
}
</style>