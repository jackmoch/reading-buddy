'use strict'

const User = require('../models/user')
const rp = require('request-promise')

module.exports.addToCompleted = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $push: { "completed": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.removeFromCompleted = ({ session: { userId }, body: { bookId } }, res, err) => {
	User
		.findByIdAndUpdate( userId, { $pull: { "completed": bookId } } )
		.then((data) => {
			res.json({data})
		})
}

module.exports.getCompleted = ({ session: { userId } }, res, err) => {
	User
		.findById(userId)
		.then((user) => {
			let promiseArray = []
			let books = user.completed.forEach(bookId => {
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