const Review = require('../../models/Review')


const userReviews = async (obj, params, { user: { id: userId } }) => {
    const data = await Review.query()
        .where({ userId })
        .orderBy('createdAt', 'DESC')
    return data
  }

  
const locationReviews = async (obj, { locationId }) => {
  const data = await Review.query()
    .where({ locationId })
    .orderBy('createdAt', 'DESC')
  return data
}

const reviewerName = async obj => {
  if (obj.anonymous) {
    return 'Anonymous'
  }
  const data = await obj.$relatedQuery('user')
  return data.firstName + ' ' + data.lastName.charAt(0) + '.'
}

const locationName = async obj => {
  const data = await obj.$relatedQuery('location')
  return data.fullName
}

const resolver = {
  Query: {
    userReviews,
    locationReviews,
  },
  Review: {
    locationName,
    reviewerName,
  }
}

module.exports = resolver
