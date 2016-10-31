import { REGISTER_USER, LOGIN, GET_USER, LOGOUT } from '../actions/index'

export default function(state = null, action) {
	switch (action.type) {
		case REGISTER_USER:
			return action.payload.data
		break
		case LOGIN: 
			return action.payload.data
		break
		case GET_USER:
			return action.payload.data
		break 
		case LOGOUT:
			return action.payload.data
	}
	return state
}