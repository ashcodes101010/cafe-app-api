const merge = require('lodash.merge')
const Location = require('./Location')
const Review = require('./Review')
const User = require('./User')

const resolvers = [Location, Review, User]

module.exports = merge(...resolvers)
