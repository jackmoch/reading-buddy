'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('user', {
  password: {
    type: String,
    required: true,
  },
  username: String,
  first_name: String,
  last_name: String,
  wishlist: Array,
  currently_reading: Array,
  completed: Array
})