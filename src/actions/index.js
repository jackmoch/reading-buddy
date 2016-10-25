import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const ROOT_URL = 'http://localhost:3000'

export function registerUser(user) {
	const url = `${ROOT_URL}/registerUser`
	const request = axios.post(url, user)

	return{
		type: REGISTER_USER,
		payload: request
	}
}