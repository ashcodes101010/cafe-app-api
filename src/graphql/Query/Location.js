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

const avgRating = async obj => {
  const data = await obj.$relatedQuery('reviews').select('rating')
  if (!data.length) {
    return 0
  }
  const total = data.reduce((acc, c) => acc + c.rating, 0);
  return total / data.length;
}

const resolver = {
  Query: {
    getLocations,
    getLocation,
  },
  Location: {
    avgRating,
    hours,
  }
}

module.exports = resolver
