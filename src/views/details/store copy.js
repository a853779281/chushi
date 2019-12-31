// import request from '@/utils/request'
// import api from '@/api/index'

// const GET_DETAILS_GOODS = 'GET_DETAILS_GOODS'



export default {
    state: {
        goods: {}
    },
    actions: {
        // async getgoods({ commit }, id) {
        //     const result = await request({
        //         url: api.details.detailsGoods,
        //         params: {
        //             ctl: 'Goods_Goods',
        //             met: 'goods',
        //             typ: 'json',
        //             goods_id: id,
        //             k: '',
        //             u: '',
        //             cid: '',
        //             lbs_geo: 'province: 上海市,city: 上海市,district: 松江区,street: 莘砖公路,streetnumber: 589 号',
        //             ua: 'wap'
        //         }
        //     })
        //     commit({
        //         type: GET_DETAILS_GOODS,
        //         payload: result.data
        //     })
        // }
    },
    mutations: {
        //     [GET_DETAILS_GOODS](state, actions) {
        //         state.goods = actions.payload
        //     }
    }
}