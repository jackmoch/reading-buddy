import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'

const rootReducer = combineReducers({
  userRegister: RegisterUser,
  userLogin: Login
});

export default rootReducer;