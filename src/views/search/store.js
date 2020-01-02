import api from '@/api'
import request from "@/utils/request";

const SEARCH_DATA = 'SEARCH_DATA'
export default {
    state: {
        list: {}
    },
    actions: {
        async searchData({
            commit
        }, value) {
            const res = await request({
                url: api.searchPage.search,
                params: {
                    input: 1,
                    screen: [],
                    activity: [],
                    brand: [],
                    r: 'index/classify',
                    px: 'renqi',
                    row: 1,
                    kw: value,
                    button_bnt: ''
                }
            })
            commit({
                type: SEARCH_DATA,
                payload: res.data
            })
        }
    },
    mutations: {
        [SEARCH_DATA](state, action) {
            // console.log(action.payload)
            state.list = action.payload
        }
    }
}