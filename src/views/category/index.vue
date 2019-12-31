<template>
  <div class="category">
    <CategoryTab></CategoryTab>
    <div class="category_body">
      <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <ItemList :floors="items[activeIndex]" />
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import CategoryTab from "./CategoryTab";
import ItemList from "./itemList";
import request from "@/utils/request.js";
export default {
  components: {
    CategoryTab,
    ItemList
  },
  data() {
    return {
      activeIndex: 0,
      items: []
    };
  },
  async mounted() {
    const result = await request({
      url: "/index.php",
      params: {
        r: "class/category",
        type: 1
      }
    });
    const data = result.data.data.data.map(item => {
      item.text = item.name;
      return item;
    });
    this.items = data;
  }
};
</script>


<style lang="stylus" scoped>
.category {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .category_body {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
}
</style>