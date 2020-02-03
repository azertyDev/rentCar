import { carCon, deleteCar } from "../Const/car";

// ! read car

function reqAdminCarRead() {
  return {
    type: carCon.request,
    payload: true
  };
}

function recAdminCarRead(data) {
  return {
    type: carCon.receive,
    payload: [...data]
  };
}

// ! delete car

function reqAdminCarDelete(id) {
  return {
    type: deleteCar.request,
    payload: {
        pending:true,
        id
    }
  };
}

export { reqAdminCarRead, recAdminCarRead };
