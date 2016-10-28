import { combineReducers } from 'redux';
import SearchedBooks from './reducer_search'
import WishlistAction from './reducer_wishlist_actions'
import Wishlist from './reducer_wishlist.js'
import CurrentlyReadingAction from './reducer_currently_reading_actions'
import CurrentlyReading from './reducer_currently_reading.js'
import Completed from './reducer_completed'
import CompletedAction from './reducer_completed_actions'
import User from './reducer_user'

const rootReducer = combineReducers({
	User: User,
  searchedBooks: SearchedBooks,
  wishlistAction: WishlistAction,
  Wishlist: Wishlist,
  currentlyReadingAction: CurrentlyReadingAction,
  CurrentlyReading: CurrentlyReading,
  Completed: Completed,
  completedAction: CompletedAction
});

export default rootReducer;