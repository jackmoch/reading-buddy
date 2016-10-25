'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = Router()
const User = require('../models/user')

router.post('/register', ({ session, body: { username, password, first_name, last_name} }, res, err) => {
	User.findOne({ username })
		.then(user => {
			if (user) {
				res.json({ msg: 'User is already registered' })
			} else {
				return new Promise((resolve, reject) => {
					bcrypt.hash(password, 15, (err, hash) => {
						if (err) {
							reject(err)
						} else {
							resolve(hash)
						}
					})
				})
			}
		})
		.then(hash => User.create({ username, password: hash, first_name, last_name }))
		.then((user) => {
			session.userId = user.id
			res.json(user.id)
		})
		.catch(err)
})

module.exports = router