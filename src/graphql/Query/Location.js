const Location = require('../../models/Location')

const getLocations = async () => {
  const data = await Location.query()
    .orderBy('fullName')
  return data
}

const resolver = {
  Query: {
    getLocations,
  },
}

module.exports = resolver
