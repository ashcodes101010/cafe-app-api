const Review = require('../../models/Review')

const addReview = async (obj, { input }, { user: { id: userId } }) => {
  const data = await Review.query()
    .insertAndFetch({ userId, ...input })
  return data
}

const resolver = {
  Mutation: {
    addReview,
  },
}

module.exports = resolver
