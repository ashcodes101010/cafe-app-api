const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Purchase extends BaseModel {
  static get tableName() {
    return 'purchases'
  }

  static get relationMappings() {
    const Location = require('./Location')

    return {
      location: {
        relation: BelongsToOneRelation,
        modelClass: Location,
        join: {
          from: 'purchases.locationId',
          to: 'locations.id',
        },
      },
    }
  }
}

module.exports = Purchase
