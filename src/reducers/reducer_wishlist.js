import { ADD_TO_WISHLIST } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case ADD_TO_WISHLIST:
			return action.payload
	}
	return state
}