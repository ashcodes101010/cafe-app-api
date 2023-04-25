const merge = require('lodash.merge')
const GoogleAuth = require('./GoogleAuth')
const Review = require('./Review')

const resolvers = [GoogleAuth, Review]

module.exports = merge(...resolvers)
