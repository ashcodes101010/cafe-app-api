const jwt = require('jsonwebtoken')
const config = require('../config')

const createToken = payload => jwt.sign(payload, config.tokenSecret, {
  expiresIn: config.tokenLifetime,
})

const decodeToken = token => {
  if (token) {
    try {
      return jwt.verify(token, config.tokenSecret)
    } catch (error) {
      throw new Error('Invalid request.')
    }
  } 
}

module.exports = { createToken, decodeToken }
