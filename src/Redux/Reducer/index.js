import {combineReducers} from 'redux';
import loginReducer from '../Reducer/login';
import userReducer from '../Reducer/user';
import modalReducer from '../Reducer/modal';
const rootReducer=combineReducers({
    logins:loginReducer,
    users:userReducer,
    modals:modalReducer
})

export default rootReducer;