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

const resolver = {
  Query: {
    getLocations,
    getLocation,
  },
  Location: {
    hours,
  }
}

module.exports = resolver
