const Purchase = require('../../models/Purchase')

const addPurchase = async (obj, { input }, { user: { id: userId } }) => {
  const data = await Purchase.query()
    .insertAndFetch({ userId, ...input })
  return data
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
