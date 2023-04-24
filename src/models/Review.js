const BaseModel = require('./BaseModel')

class Review extends BaseModel {
  static get tableName() {
    return 'reviews'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Review
