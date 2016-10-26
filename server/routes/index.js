'use strict'

const { Router } = require('express')
const router = Router()

const session = require('../controllers/session')
const wishlist = require('../controllers/wishlist')

router.post('/register', session.register)

router.post('/login', session.login)

router.post('/api/addToWishlist', wishlist.addToWishlist)

router.get('/api/getWishlist', wishlist.getWishlist)

module.exports = router