const BaseModel = require('./BaseModel')

class Location extends BaseModel {
  static get tableName() {
    return 'locations'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Location
