const Purchase = require('../../models/Purchase')
const knex = require('../../lib/knex')
const User = require('../../models/User')


const addPurchase = async (obj, { input }, { user }) => {
  const { boardPlusBalance, id } = user
  const trans = await knex.transaction(async trx => {
    const data = await Purchase.query(trx)
      .insertAndFetch({ userId: id, ...input })
    if (input.paymentMethod === 'BoardPlus') {
      await User.query(trx).updateAndFetchById(id, { 
        boardPlusBalance: boardPlusBalance - input.amount,
      })
    }
    return data
  })
  return trans
}

const deletePurchase = async (obj, { id }) => {
  await Purchase.query().deleteById(id)
  return id
}

const resolver = {
  Mutation: {
    addPurchase,
    deletePurchase,
  },
}

module.exports = resolver
