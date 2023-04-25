const User = require('../../models/User')

const viewer = async (obj, params, { user }) => {
  if (user) {
    const data = await User.query().findById(user.id)
    return data
  }
  return user
}

const resolver = {
  Query: {
    viewer,
  },
}

module.exports = resolver
