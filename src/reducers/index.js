import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'

const rootReducer = combineReducers({
  user: RegisterUser || Login
});

export default rootReducer;