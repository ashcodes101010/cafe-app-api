const BaseModel = require('./BaseModel')

class Purchase extends BaseModel {
  static get tableName() {
    return 'purchases'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Purchase
