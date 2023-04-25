const User = require('../../models/User')
const { createToken } = require('../../lib/auth')

const googleSignIn = async (obj, { input }, { res }) => {
  const { email } = input
  let user = await User.query().findOne({ email })
  if (!user) {
    user = await User.query().insertAndFetch({ ...input })
  }
  const token = await createToken({ sub: user.id })
  res.set('x-token', token)
  return user
}

const developerSignIn = async (obj, params, { res }) => {
  const user = await User.query().findOne({ email: 'ashleighcoltman@college.harvard.edu' })
  const token = await createToken({ sub: user.id })
  res.set('x-token', token)
  return user
}

const resolver = {
  Mutation: {
    googleSignIn,
    developerSignIn,
  },
}

module.exports = resolver