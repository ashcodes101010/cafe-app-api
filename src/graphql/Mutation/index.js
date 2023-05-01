const merge = require('lodash.merge')
const GoogleAuth = require('./GoogleAuth')
const Purchase = require('./Purchase')
const Review = require('./Review')
const User = require('./User')

const resolvers = [GoogleAuth, Purchase, Review, User]

module.exports = merge(...resolvers)
