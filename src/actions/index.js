import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN = 'LOGIN'
export const SEARCH_BOOKS = 'SEARCH_BOOKS'
export const ROOT_URL = 'http://localhost:3000'

export function registerUser(user) {
	const url = `${ROOT_URL}/register`
	const request = axios.post(url, user)

	return{
		type: REGISTER_USER,
		payload: request
	}
}

export function login(user) {
	const url = `${ROOT_URL}/login`
	const request = axios.post(url, user)

	return{
		type: LOGIN,
		payload: request
	}
}

export function searchBooks(searchTerm) {
	return {
		type: SEARCH_BOOKS,
		payload: searchTerm
	}
}