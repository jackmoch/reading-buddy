import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'
import SearchedBooks from './reducer_search'

const rootReducer = combineReducers({
  userRegister: RegisterUser,
  userLogin: Login,
  searchedBooks: SearchedBooks
});

export default rootReducer;