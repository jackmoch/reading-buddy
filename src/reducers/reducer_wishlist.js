import { GET_WISHLIST } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case GET_WISHLIST:
			return action.payload.data.books
	}
	return state
}