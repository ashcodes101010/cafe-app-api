const Review = require('../../models/Review')

const addReview = async (obj, { input }, { user: { id: userId } }) => {
  const data = await Review.query()
    .insertAndFetch({ userId, ...input })
  return data
}

const deleteReview = async (obj, { id }) => {
  await Review.query().deleteById(id)
  return id
}

const resolver = {
  Mutation: {
    addReview,
    deleteReview,
  },
}

module.exports = resolver
