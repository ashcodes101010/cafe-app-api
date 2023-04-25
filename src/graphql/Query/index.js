const merge = require('lodash.merge')
const Location = require('./Location')
const User = require('./User')

const resolvers = [Location, User]

module.exports = merge(...resolvers)
