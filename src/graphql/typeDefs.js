const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON

  type Mutation {
    addReview(input: ReviewInput): Review
    deleteReview(id: ID!): ID
    googleSignIn(input: GoogleInput): User
    developerSignIn: User
  }

  type Query {
    viewer: User
    getLocations: [Location!]
    getLocation(id: ID!): Location!
    userReviews: [Review!]
    locationReviews(locationId: ID!): [Review!]
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
    ratingInfo: JSON
    hours: [Availability!]
  }

  type Availability {
    id: ID!
    openHour: Float
    openMin: Float
    closeHour: Float
    closeMin: Float
    monday: Boolean
    tuesday: Boolean
    wednesday: Boolean
    thursday: Boolean
    friday: Boolean
    saturday: Boolean
    sunday: Boolean
    extraInfo: String
    hoursUncertain: Boolean
  }

  type Review {
    id: ID!
    userId: ID!
    locationId: ID!
    review: String
    rating: Float
    anonymous: Boolean
    reviewerName: String
    locationName: String
    createdAt: String
  }

  input ReviewInput {
    locationId: String
    review: String
    rating: Float
    anonymous: Boolean
  }

  input GoogleInput {
    email: String!
    firstName: String
    lastName: String
    fullName: String
  }
`
