<template>
  <div id="itemList">
    <div v-for="(item,index) of getFloorsData" :key="index" class="box">
      <h3>{{item.name}}</h3>
      <ul>
        <li v-for="el of item.list" :key="el.api_cid">
          <routerLink
            :to="{
                        name:'List',
                        params:{
                            id: el.api_cid,
                        },
                        query:{
                            a:1
                        }
                             }"
          >
            <div class="imgbox">
              <img :src="el.img" :alt="el.name" />
            </div>
            <span>{{el.name}}</span>
          </routerLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["floors"],
  computed: {
    getFloorsData() {
      return this.floors && this.floors.floors;
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