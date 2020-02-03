import {carCon} from '../Const/adminCars';

const initialState={
    pending:false,
    data:[]
}

function adminCarReducer(state={...initialState}, {type, payload}){
    switch(type){
      case carCon.request:
          return{
              ...state,
              pending:payload
          }
      case carCon.receive:
          return{
              ...state,
              data:[...payload],
              pending:false
          }
       default:
           return{
               ...state
           }
    }
}

export default adminCarReducer;