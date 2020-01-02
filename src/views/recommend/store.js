import api from '@/api'
import request from "@/utils/request";


const RECOMMEND_LIST = 'RECOMMEND_LIST'
const RECOMMEND_NEW = 'RECOMMEND_NEW'
export default {
    state: {
        recommendList: {}
    },
    actions: {
        async recomList({
            commit
        }) {
            const res = await request({
                url: api.recommendPage.recommend,
                method: "GET",
                params: {
                    r: "class/cyajaxsub",
                    page: 1,
                    cid: 85,
                    px: "t",
                    cac_id: ""
                }
            });
            commit({
                type: RECOMMEND_LIST,
                payload: res.data.data.content
            })
        },
        async recomNew({
            commit
        }, num) {
            const res = await request({
                url: api.recommendPage.recommend,
                params: {
                    r: 'class/cyajaxsub',
                    page: num,
                    cid: 85,
                    px: 't',
                    cac_id: 'DnF1ZXJ5VGhlbkZldGNoBAAAAAA49xCcFjRvaTVfS3dpVEZtX01ndEpDc29DVVEAAAAATnfN7hZlVE1rWGVqa1RVU2lVbElfMkVUTkdRAAAAAFiQO-4WNDVXeGRTeWZUUmlJTi1oNEZHYVVYQQAAAAA49xCdFjRvaTVfS3dpVEZtX01ndEpDc29DVVE%3D'
                }
            })
            commit({
                type: RECOMMEND_NEW,
                payload: res.data.data.content
            })
        }
    },
    mutations: {
        [RECOMMEND_LIST](state, action) {
            state.recommendList = action.payload
        },
        [RECOMMEND_NEW](state, action) {
            console.log(state.recommendList, action.payload)
            state.recommendList.push(...action.payload) //展开
        }
    }
}