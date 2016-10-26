import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'
import SearchedBooks from './reducer_search'
import WishlistAction from './reducer_wishlist_actions'
import Wishlist from './reducer_wishlist.js'

const rootReducer = combineReducers({
  userRegister: RegisterUser,
  userLogin: Login,
  searchedBooks: SearchedBooks,
  wishlistAction: WishlistAction,
  Wishlist: Wishlist
});

export default rootReducer;