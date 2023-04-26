const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Location extends BaseModel {
  static get tableName() {
    return 'locations'
  }

  static get relationMappings() {
    const Availability = require('./Availability')

    return {
      hours: {
        relation: HasManyRelation,
        modelClass: Availability,
        join: {
          from: 'locations.id',
          to: 'availabilities.locationId',
        },
      },
    }
  }
}

module.exports = Location
