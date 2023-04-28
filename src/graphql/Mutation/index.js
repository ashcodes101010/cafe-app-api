const merge = require('lodash.merge')
const GoogleAuth = require('./GoogleAuth')
const Review = require('./Review')
const User = require('./User')

const resolvers = [GoogleAuth, Review, User]

module.exports = merge(...resolvers)
