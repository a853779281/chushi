// import request from '@/utils/request.js'

// const ACCOUNTLOGIN='ACCOUNTLOGIN'

// export default {
//     state:{
//         peoson:{}
//     },
//     actions:{
//        async ALogin({commit}){
//             const result=await request({
//                 url:'../../mock/index.json',
//                 method:"post",
//                 headers:{
//                     "Content-Type":'application/json'
//                 },
//                 data:{
//                     tkoen:'',
//                     usermane:'',
//                     password:'',
//                 }
//             })
//             commit({
//                 type:ACCOUNTLOGIN,
//                 payload:result.data
//             })
//         }
//     },
//     mutations:{
//         [ACCOUNTLOGIN](state,action){
//             state.person=action.payload
//         }
//     }
// }