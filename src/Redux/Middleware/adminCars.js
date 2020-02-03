import {reqAdminCarRead, recAdminCarRead} from '../Action/adminCars';
import CarData from '../../Models/car.json';

function readAdminCarMidd(){
    return  dispatch=>{
        dispatch(reqAdminCarRead());
       setTimeout(() => {
            dispatch(recAdminCarRead(CarData))
       }, 1500);
    }
}


export {readAdminCarMidd}