import {carCon, deleteCar} from '../Const/adminCars';

const initialState={
    pending:false,
    data:[],
    deleteCar:{
        id:null,
        pending:false
    }
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
              pending:false,
              deleteCar:{
                  id:null,
                  pending:false
              }
          }
    case deleteCar.request:
        return{
            ...state,
            deleteCar:{
                id:payload,
                pending:true
            }
        }
       default:
           return{
               ...state
           }
    }
}

export default adminCarReducer;