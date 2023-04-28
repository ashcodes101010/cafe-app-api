const User = require('../../models/User')

const updateBPBalance = async (obj, { boardPlusBalance }, { user: { id: userId } }) => {
  const data = await User.query()
    .updateAndFetchById(userId, { boardPlusBalance })
  return boardPlusBalance
}

const resolver = {
  Mutation: {
    updateBPBalance,
  },
}

module.exports = resolver
