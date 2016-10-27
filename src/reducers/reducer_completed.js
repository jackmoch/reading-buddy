import { GET_COMPLETED } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case GET_COMPLETED:
			return action.payload.data.books
	}
	return state
}