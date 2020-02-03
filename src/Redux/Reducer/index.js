import {combineReducers} from 'redux';
import loginReducer from '../Reducer/login';
import userReducer from '../Reducer/user';
import modalReducer from '../Reducer/modal';
import adminCarReducer from './adminCars';
const rootReducer=combineReducers({
    logins:loginReducer,
    users:userReducer,
    modals:modalReducer,
    adminCars: adminCarReducer
})

export default rootReducer;