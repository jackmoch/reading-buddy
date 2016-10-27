import { ADD_TO_CURRENTLY_READING, REMOVE_FROM_CURRENTLY_READING } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case ADD_TO_CURRENTLY_READING:
			return action.payload
		break
		case REMOVE_FROM_CURRENTLY_READING:
			return action.payload
	}
	return state
}