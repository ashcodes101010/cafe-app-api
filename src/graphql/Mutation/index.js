const merge = require('lodash.merge')
const Review = require('./Review')

const resolvers = [Review]

module.exports = merge(...resolvers)
