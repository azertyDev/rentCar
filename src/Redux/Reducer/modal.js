import {modalCon} from '../Const/user';

const initialState={
    modal:{
        visible:false,
        text:"",
        action:"",
        id:null
    }
}

function  modalReducer(state={...initialState}, {type, payload}){
    switch(type){
    case modalCon.visible:
        return{
            ...state,
            modal:{...payload}
        }
      default:
          return{
              ...state
          }
    }
}

export default modalReducer;