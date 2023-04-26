const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Location extends BaseModel {
  static get tableName() {
    return 'locations'
  }

  static get relationMappings() {
    const Availability = require('./Availability')
    const Review = require('./Review')

    return {
      hours: {
        relation: HasManyRelation,
        modelClass: Availability,
        join: {
          from: 'locations.id',
          to: 'availabilities.locationId',
        },
      },
      reviews: {
        relation: HasManyRelation,
        modelClass: Review,
        join: {
          from: 'locations.id',
          to: 'reviews.locationId',
        },
      },
    }
  }
}

module.exports = Location
