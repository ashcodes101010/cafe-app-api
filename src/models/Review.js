const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Review extends BaseModel {
  static get tableName() {
    return 'reviews'
  }

  static get relationMappings() {
    const User = require('./User')
    const Location = require('./Location')

    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.userId',
          to: 'users.id',
        },
      },
      location: {
        relation: BelongsToOneRelation,
        modelClass: Location,
        join: {
          from: 'reviews.locationId',
          to: 'locations.id',
        },
      },
    }
  }
}

module.exports = Review
