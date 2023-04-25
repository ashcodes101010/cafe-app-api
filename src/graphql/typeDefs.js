const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON

  type Mutation {
    addReview(input: ReviewInput): Review
    googleSignIn(input: GoogleInput): User
    developerSignIn: User
  }

  type Query {
    viewer: User
    getLocations: [Location!]
  }

  type User {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    fullName: String
    boardPlusBalance: Float
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
  }

  type Review {
    id: ID!
    review: String
    rating: Float
    anonymous: Boolean
  }

  input ReviewInput {
    locationId: String
    review: String
    rating: Float
  }

  input GoogleInput {
    email: String!
    firstName: String
    lastName: String
    fullName: String
  }
`
