import {loginCon} from '../Const/login';

const initilAlState={
    pending:false,
    user:{},
    err:false
}

function loginReducer(state={...initilAlState}, {type, payload}){
    switch(type){
        case loginCon.request:
            return{
                ...state,
                pending:true
            }
        case loginCon.receive:
            return{
                ...state,
                pending:false,
               user:{...payload}
            }
        case loginCon.err:
            return{
                ...state,
                err:true,
                pending:false
            }
        default:
            return{
                ...state
            }
    }
}

export default loginReducer;