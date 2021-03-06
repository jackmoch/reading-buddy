import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const GET_USER = 'GET_USER'
export const SEARCH_BOOKS = 'SEARCH_BOOKS'
export const ADD_TO_CURRENTLY_READING = 'ADD_TO_CURRENTLY_READING'
export const REMOVE_FROM_CURRENTLY_READING = 'REMOVE_FROM_CURRENTLY_READING'
export const GET_CURRENTLY_READING = 'GET_CURRENTLY_READING'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
export const GET_WISHLIST = 'GET_WISHLIST'
export const ADD_TO_COMPLETED = 'ADD_TO_COMPLETED'
export const REMOVE_FROM_COMPLETED = 'REMOVE_FROM_COMPLETED'
export const GET_COMPLETED = 'GET_COMPLETED'

export const ROOT_URL = 'http://reading-buddy.herokuapp.com'

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

export function logout() {
	const url = `${ROOT_URL}/logout`
	const request = axios.post(url)

	return {
		type: LOGOUT,
		payload: request
	}
}

export function getUser() {
	const url = `${ROOT_URL}/getUser`
	const request = axios.get(url)

	return {
		type: GET_USER,
		payload: request
	}
}

export function searchBooks(searchTerm) {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`
	const request = axios.get(url)

	return {
		type: SEARCH_BOOKS,
		payload: request
	}
}

export function addToCurrentlyReading(bookId) {
	const url = `${ROOT_URL}/api/addToCurrentlyReading`
	const request = axios.post(url, {bookId})

	return {
		type: ADD_TO_CURRENTLY_READING,
		payload: request
	}
}

export function removeFromCurrentlyReading(bookId) {
	const url = `${ROOT_URL}/api/removeFromCurrentlyReading`
	const request = axios.post(url, {bookId})

	return {
		type: REMOVE_FROM_CURRENTLY_READING,
		payload: request
	}
}

export function getCurrentlyReading() {
	const url = `${ROOT_URL}/api/getCurrentlyReading`
	const request = axios.get(url)

	return {
		type: GET_CURRENTLY_READING,
		payload: request
	}
}

export function addToWishlist(bookId) {
	const url = `${ROOT_URL}/api/addToWishlist`
	const request = axios.post(url, {bookId})

	return {
		type: ADD_TO_WISHLIST,
		payload: request
	}
}

export function removeFromWishlist(bookId) {
	const url = `${ROOT_URL}/api/removeFromWishList`
	const request = axios.post(url, {bookId})

	return {
		type: REMOVE_FROM_WISHLIST,
		payload: request
	}
}

export function getWishlist() {
	const url = `${ROOT_URL}/api/getWishlist`
	const request = axios.get(url)

	return {
		type: GET_WISHLIST,
		payload: request
	}
}

export function addToCompleted(bookId) {
	const url = `${ROOT_URL}/api/addToCompleted`
	const request = axios.post(url, {bookId})

	return {
		type: ADD_TO_COMPLETED,
		payload: request
	}
}

export function removeFromCompleted(bookId) {
	const url = `${ROOT_URL}/api/removeFromCompleted`
	const request = axios.post(url, {bookId})

	return {
		type: REMOVE_FROM_COMPLETED,
		payload: request
	}
}

export function getCompleted() {
	const url = `${ROOT_URL}/api/getCompleted`
	const request = axios.get(url)

	return {
		type: GET_COMPLETED,
		payload: request
	}
}