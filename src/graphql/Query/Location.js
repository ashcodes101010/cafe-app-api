const Location = require('../../models/Location')

const getLocations = async () => {
  const data = await Location.query()
    .orderBy('fullName')
  return data
}

const getLocation = async (obj, { id }) => {
  const data = await Location.query().findById(id)
  return data
}

const hours = async obj => {
  const data = await obj.$relatedQuery('hours')
  return data
}

const ratingInfo = async obj => {
  const data = await obj.$relatedQuery('reviews').select('rating')
  if (!data.length) {
    return { avgRating: 0, numReviews: 0 }
  }
  const total = data.reduce((acc, c) => acc + c.rating, 0);
  return { avgRating: total / data.length, numReviews: data.length };
}

const resolver = {
  Query: {
    getLocations,
    getLocation,
  },
  Location: {
    hours,
    ratingInfo,
  }
}

module.exports = resolver
