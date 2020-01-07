<template>
    <div>
        <CollectTop/>
        <div class="list_body">
            <ul class="goods_list">
                <router-link
                :to="{
                        name:'DetailsGoods',
                         params:{
                            id: item.id
                        },
                        query:{
                            ...item
                        }
                }"
                v-for="item in collection"
                :key="item.id"
                tag="li"
                >
                <div class="img_box">
                    <img :src="item.pic" :alt="item.title" />
                </div>
                <div class="content_box">
                    <h1>{{item.title}}</h1>
                    <span class="price">
                    ￥
                    <b class="price_num">{{item.price}}</b>
                    </span>
                    <div class="common_footer">

                    </div>
                </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import CollectTop from './collectTop.vue'
export default {
    components: {
        CollectTop
    },
    computed:{
        collection(){
            let collection=localStorage.getItem('collection')
            return JSON.parse(collection)
        }
    },
    mounted(){
        console.log(this.collection)
    }
}
</script>

<style lang="stylus" scoped>
.goods_list 
    margin-top: 0.5rem;

    li
        display: flex;
        .img_box 
            width: 0.88rem;
            height: 0.88rem;
            padding: 0.1rem;
            img 
                width: 0.88rem;
                height: 0.88rem;
        .content_box 
            width: 2.5rem;
            padding: 0.1rem 0.1rem;
            margin-right: 0.1rem;
            h1 
                font-size: 0.143rem;
                height: 0.4rem;
                line-height: 0.2rem;
                white-space: 0.1rem;
                word-wrap: break-word;
                color: #111;
                margin-bottom: 0.15rem;

            .price 
                color: #BD9960;
                font-size: 0.13rem;

                .price_num 
                    font-size: 0.176rem;


            .common_footer 
                margin-top: 0.1rem;

                .common_salenum 
                    font-size: 0.11rem;
                    color: #999;
                    display: inline-block;
                    width: 1rem;


                .common_evaluate 
                    font-size: 0.11rem;
                    color: #999;
</style>