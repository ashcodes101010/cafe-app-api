const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON
  scalar DateTime
  scalar Date
  scalar Time

  type Mutation {
    addReview(input: ReviewInput): Review
    deleteReview(id: ID!): ID
    googleSignIn(input: GoogleInput): User
    developerSignIn: User
    updateBPBalance(boardPlusBalance: Float): Float
  }

  type Query {
    viewer: User
    getLocations: [Location!]
    getLocation(id: ID!): Location!
    userReviews: [Review!]
    locationReviews(locationId: ID!): [Review!]
    userPurchaseHistory: [Purchase!]
    boardPlusPurchases: [Purchase!]
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
    createdAt: DateTime
  }

  type Purchase {
    id: ID!
    locationId: ID!
    locationName: String
    amount: Float
    paymentMethod: String
    purchaseDate: Date
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
