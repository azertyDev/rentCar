import {combineReducers} from 'redux';
import loginReducer from '../Reducer/login';
const rootReducer=combineReducers({
    logins:loginReducer
})

export default rootReducer;