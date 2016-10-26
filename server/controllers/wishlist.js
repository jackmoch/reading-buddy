'use strict'

const User = require('../models/user')

module.exports.addToWishlist = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $push: { "wishlist": bookId } } )
		.then((data) => {
			console.log(data)
		})
}

