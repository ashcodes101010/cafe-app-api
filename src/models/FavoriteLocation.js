const BaseModel = require('./BaseModel')

class FavoriteLocation extends BaseModel {
  static get tableName() {
    return 'favoriteLocations'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = FavoriteLocation
