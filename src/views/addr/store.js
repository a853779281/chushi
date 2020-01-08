const ADDR = "ADDR"
export default {
    state: {
        list: [
            {
                id: '1',
                name: '江婉君',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
                id: '2',
                name: '王永松',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
            },
            {
                id: '3',
                name: '张伟鹏',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
                id: '4',
                name: '李佳乐',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
            },
            {
                id: '5',
                name: '汪继光',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
                id: '6',
                name: '小仙女',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
            },
            {
                id: '7',
                name: '刘狗蛋',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
                id: '8',
                name: '王二狗',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
            }
        ],
    },
    actions: {
        addr({ commit }, payload) {
            commit({
                type: ADDR,
                payload
            })
        },
    },
    mutations: {
        [ADDR](state, action) {
            let address = `${action.payload.province}${action.payload.city}${action.payload.country}${action.payload.addressDetail}`
            let id = state.list.length
            state.list.push({
                id: id,
                name: action.payload.name,
                tel: action.payload.tel,
                address: address
            })
        },
    }
}