'use strict'

const { Router } = require('express')
const router = Router()

const session = require('../controllers/session')
const wishlist = require('../controllers/wishlist')
const currentlyReading = require('../controllers/currently_reading')

router.post('/register', session.register)

router.post('/login', session.login)

router.post('/api/addToWishlist', wishlist.addToWishlist)

router.post('/api/removeFromWishlist', wishlist.removeFromWishlist)

router.get('/api/getWishlist', wishlist.getWishlist)

router.post('/api/addToCurrentlyReading', currentlyReading.addToCurrentlyReading)

router.post('/api/removeFromCurrentlyReading', currentlyReading.removeFromCurrentlyReading)

router.get('/api/getCurrentlyReading', currentlyReading.getCurrentlyReading)

module.exports = router