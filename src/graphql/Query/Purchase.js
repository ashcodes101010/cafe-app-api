const Purchase = require('../../models/Purchase')

const userPurchaseHistory = async (obj, params, { user: { id: userId } }) => {
  const data = await Purchase.query()
    .where({ userId })
    .orderBy('purchaseDate', 'DESC')
    .orderBy('createdAt', 'DESC')
  return data
}

const boardPlusPurchases = async (obj, params, { user: { id: userId } }) => {
  const data = await Purchase.query()
    .where({ userId, paymentMethod: 'BoardPlus' })
    .orderBy('purchaseDate', 'DESC')
    .orderBy('createdAt', 'DESC')
  return data
}

const locationName = async obj => {
  const data = await obj.$relatedQuery('location')
  return data.fullName
}

const resolver = {
  Query: {
    userPurchaseHistory,
    boardPlusPurchases,
  },
  Purchase: {
    locationName,
  }
}

module.exports = resolver
