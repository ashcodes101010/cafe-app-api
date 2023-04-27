const merge = require('lodash.merge')
const Location = require('./Location')
const Purchase = require('./Purchase')
const Review = require('./Review')
const User = require('./User')

const resolvers = [Location, Purchase, Review, User]

module.exports = merge(...resolvers)
