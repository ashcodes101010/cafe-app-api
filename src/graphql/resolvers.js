const merge = require('lodash.merge')
const mutations = require('./Mutation')
const queries = require('./Query')
const scalars = require('../lib/scalars')

module.exports = merge(mutations, queries, scalars)
