import { ADD_TO_COMPLETED, REMOVE_FROM_COMPLETED } from '../actions/index'

export default function(state = '', action) {
	switch (action.type) {
		case ADD_TO_COMPLETED:
			return action.payload
		break
		case REMOVE_FROM_COMPLETED:
			return action.payload
	}
	return state
}