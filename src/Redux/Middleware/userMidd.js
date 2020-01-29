import {reqLoadFunc, recLoadFunc, errLoadFunc, reqDeleteFunc, errDeleteFunc} from '../Action/users';
import UserData from '../../Models/user.json';
import store from '../Store/store';
import _ from 'lodash';
export function readUsers(){
    return _.get(store.getState(),'users.data')
}

// read all data

const userLoadMidd=()=>{
    return dispatch=>{
        dispatch(reqLoadFunc());
        setTimeout(() => {
            dispatch(recLoadFunc(UserData))
        }, 500);
    }
}

// delete user 
const deleteUserMidd=(id)=>{
    return dispatch=>{
        dispatch(reqDeleteFunc(id));
        let filter=[...readUsers()].filter(item=>{
            return item.id !==id
        })
        setTimeout(() => {
        
            dispatch(recLoadFunc(filter))
        }, 500);
    }
}

export {userLoadMidd, deleteUserMidd};
