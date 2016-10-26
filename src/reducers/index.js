import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'
import SearchedBooks from './reducer_search'
import Wishlist from './reducer_wishlist'

const rootReducer = combineReducers({
  userRegister: RegisterUser,
  userLogin: Login,
  searchedBooks: SearchedBooks,
  wishlistAction: Wishlist
});

export default rootReducer;