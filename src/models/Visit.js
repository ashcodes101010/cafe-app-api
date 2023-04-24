const BaseModel = require('./BaseModel')

class Visit extends BaseModel {
  static get tableName() {
    return 'visits'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Visit
