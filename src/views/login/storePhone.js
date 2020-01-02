import request from '@/utils/request.js'

const PHONELOGIN='PHONELOGIN'
export default{
    state:{
        person:{}
    },
    actions:{
      async  PLogin({commit}){
          const result=await request({
                url:'',
                method:'post',
                data:{
                    token:'',
                    phone:'',
                    phone_code:''
                },
                headers:{
                    "Content-Type":'application/json'
                }
            })
            commit({
                type:PHONELOGIN,
                payload:result.data
            })
        }
    },
    mutations:{
        [PHONELOGIN](state,action){
            state.person=action.payload
        }
    }
}