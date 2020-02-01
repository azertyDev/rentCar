import {carCon} from '../Const/car'; 

// ! read car

function reqAdminCarRead(){
    return{
        type:carCon.request,
        payload:true
    }
}

function recAdminCarRead(data){
  return{
      type:carCon.receive,
      payload:[...data]
  }
}

export {reqAdminCarRead, recAdminCarRead};