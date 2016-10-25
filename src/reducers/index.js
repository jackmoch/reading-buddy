import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'

const rootReducer = combineReducers({
  user: RegisterUser
});

export default rootReducer;