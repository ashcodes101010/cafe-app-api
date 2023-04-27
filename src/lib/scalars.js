const { GraphQLDateTime, GraphQLDate, GraphQLTime } = require('graphql-iso-date')

const resolver = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime,
}

module.exports = resolver