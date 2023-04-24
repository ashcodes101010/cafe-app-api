const merge = require('lodash.merge')
const Location = require('./Location')

const resolvers = [Location]

module.exports = merge(...resolvers)
