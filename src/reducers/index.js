import { combineReducers } from 'redux';
import RegisterUser from './reducer_registerUser'
import Login from './reducer_login'
import SearchedBooks from './reducer_search'
import WishlistAction from './reducer_wishlist_actions'
import Wishlist from './reducer_wishlist.js'
import CurrentlyReadingAction from './reducer_currently_reading_actions'
import CurrentlyReading from './reducer_currently_reading.js'

const rootReducer = combineReducers({
  userRegister: RegisterUser,
  userLogin: Login,
  searchedBooks: SearchedBooks,
  wishlistAction: WishlistAction,
  Wishlist: Wishlist,
  currentlyReadingAction: CurrentlyReadingAction,
  CurrentlyReading: CurrentlyReading,
});

export default rootReducer;