'use strict'

const mongoose = require('mongoose')

const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

module.exports = mongoose.model('user', {
  password: {
    type: String,
    required: true,
  },
  username: String,
  first_name: String,
  last_name: String,
  wishlist: Array
})