'use strict'

const { Router } = require('express')
const router = Router()

const session = require('../controllers/session')

router.post('/register', session.register)

module.exports = router