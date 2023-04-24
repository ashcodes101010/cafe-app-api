const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON

  type Mutation {
    addReview(input: ReviewInput): Review
  }

  type Query {
    getLocations: [Location!]
  }

  type Location {
    id: ID!
    fullName: String!
    description: String
    type: String
    image: String
    externalLink: String
    longitude: Float
    latitude: Float
    shortAddress: String
    longAddress: String
    boardPlusBalance: Float
  }

  type Review {
    id: ID!
    review: String
    rating: Float
  }

  input ReviewInput {
    locationId: String
    review: String
    rating: Float
  }
`
