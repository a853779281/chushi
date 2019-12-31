<template>
  <div id="itemList">
    <div v-for="item of dataList" :key="item.cat_id" class="box">
      <h3>{{item.cat_name}}</h3>
      <ul>
        <li v-for="el of item.child" :key="el.id">
          <routerLink
            :to="{
                        name:'List',
                        params:{
                            id:el.id
                        },
                        query:{
                            a:1
                        }
                             }"
          >
            <div class="imgbox">
              <img :src="el.cat_pic" :alt="el.cat_name" />
            </div>
            <span>{{el.cat_name}}</span>
          </routerLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request.js";
export default {
  data() {
    return {
      dataList: []
    };
  },
  props: ["floors"],
  watch: {
    floors() {
      this.getData();
    }
  },
  methods: {
    async getData() {
      const data = await request({
        url: `/index.php`,
        params: {
          ctl: "Goods_Cat",
          met: "tree",
          typ: "json",
          cat_parent_id: this.floors.id
        }
      });
      this.dataList = data.data.data.items;
    }
  }
};
</script>

<style lang="stylus" scoped>
#itemList {
  padding: 0.2rem 0.1rem;

  .box {
    height: 100%;

    h3 {
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      border-left: 4px solid #BD9960;
      padding-left: 5px;
      color: #999;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0.2rem;

      li {
        width: 0.7rem;
        margin-bottom: 0.06rem;
        width: 33%;
        padding: 0 0.05rem;
        box-sizing: border-box;

        a {
          display: flex;
          flex-direction: column;

          .imgbox {
            width: 100%;
            height: 0.7rem;

            img {
              width: 100%;
            }
          }

          span {
            text-align: center;
            width: 100%;
            font-size: 0.13rem;
            color: #444;
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>