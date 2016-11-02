'use strict'

const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports.register = ({ session, body: { username, password, first_name, last_name} }, res, err) => {
  User.findOne({ username })
    .then(user => {
      if (user) {
        res.json(null)
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
}

module.exports.login = ({ session, body: { username, password } }, res, err) => {
  let loggedInUser;
  User.findOne({ username })
     .then(user => {
       if (user) {
        loggedInUser = user;
         return new Promise((resolve, reject) =>
           bcrypt.compare(password, user.password, (err, matches) => {
             if (err) {
               reject(err)
             } else {
               resolve(matches)
             }
           })
         )
       } else {
         res.send(null)
       }
     })
     .then((matches) => {
       if (matches) {
         session.userId = loggedInUser.id
         res.json(loggedInUser.id)
       } else {
         res.send(null)
       }
      })
}

module.exports.getUser = ({ session }, res, err) => {
  if(session.userId) {
    res.json(session.userId)
  } else {
    res.json()
  }
}

module.exports.logout = ({ session }, res, err) => {
  session.destroy((err) => {
    if(err) throw err
    res.json()
  })
}