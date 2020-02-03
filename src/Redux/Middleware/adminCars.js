import {reqAdminCarRead, recAdminCarRead, reqAdminCarDelete} from '../Action/adminCars';
import CarData from '../../Models/car.json';
import store from '../Store/store';
import _ from 'lodash';

function readAll(){
    return _.get(store.getState(), 'adminCars.data')
}

function readAdminCarMidd(){
    return  dispatch=>{
        dispatch(reqAdminCarRead());
       setTimeout(() => {
            dispatch(recAdminCarRead(CarData))
       }, 1000);
    }
}

function deleteAdminCar(id){
  return dispatch=>{
      dispatch(reqAdminCarDelete(id));
      let cars=[...readAll()];
      cars=cars.filter(item=>{return item.carId !== id});
      setTimeout(() => {
          dispatch(recAdminCarRead(cars))
      }, 500);
  }
}


export {readAdminCarMidd,  deleteAdminCar}