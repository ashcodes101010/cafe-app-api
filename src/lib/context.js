// Adapted from HSA DEV Bootcamp starter code
const { isSameHour } = require('date-fns')
const { createToken, decodeToken } = require('./auth')
const User = require('../models/User')

// Context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
  const context = { req, res }

  // Collect JWT, escape 'Bearer' prefix
  const jwt = req.headers.authorization ? req.headers.authorization.slice(7) : null
  if (!jwt) {
    return context
  }

  try {
    const { sub, iat } = decodeToken(jwt)

    const user = await User.query().findById(sub)
    context.user = user
    if (isSameHour(iat, new Date().getTime() / 1000)) {
      return context
    }
    const payload = {
      sub: user.id,
    }
    res.set('x-token', createToken(payload))

    return context
  } catch (error) {
    return context
  }
}
