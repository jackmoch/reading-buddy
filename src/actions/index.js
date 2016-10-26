import axios from 'axios'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN = 'LOGIN'
export const SEARCH_BOOKS = 'SEARCH_BOOKS'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const GET_WISHLIST = 'GET_WISHLIST'

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
	const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
	const request = axios.get(url)

	return {
		type: SEARCH_BOOKS,
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

export function getWishlist() {
	const url = `${ROOT_URL}/api/getWishlist`
	const request = axios.get(url)

	return {
		type: GET_WISHLIST,
		payload: request
	}
}