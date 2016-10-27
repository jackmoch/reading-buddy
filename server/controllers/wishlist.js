'use strict'

const User = require('../models/user')
const rp = require('request-promise')

module.exports.addToWishlist = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $push: { "wishlist": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.removeFromWishlist = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $pull: { "wishlist": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.getWishlist = ({ session: { userId } }, res, err) => {
	User
		.findById(userId)
		.then((user) => {
			let promiseArray = []
			let books = user.wishlist.forEach(bookId => {
				let options = {
					uri: `https://www.googleapis.com/books/v1/volumes/${bookId}`,
					headers: {
        		'User-Agent': 'Request-Promise'
    			},
    			json: true
				}
				promiseArray.push(rp(options))
			})
			return Promise.all(promiseArray)
		})
		.then(([...books]) => {
			res.json({books})
		})
}