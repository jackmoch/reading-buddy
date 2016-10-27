import { GET_CURRENTLY_READING } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case GET_CURRENTLY_READING:
			return action.payload.data.books
	}
	return state
}