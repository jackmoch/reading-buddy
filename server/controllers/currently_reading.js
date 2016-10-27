'use strict'

const User = require('../models/user')
const rp = require('request-promise')

module.exports.addToCurrentlyReading = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $push: { "currently_reading": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.removeFromCurrentlyReading = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $pull: { "currently_reading": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.getCurrentlyReading = ({ session: { userId } }, res, err) => {
	User
		.findById(userId)
		.then((user) => {
			let promiseArray = []
			let books = user.currently_reading.forEach(bookId => {
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