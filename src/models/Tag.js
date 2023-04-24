const BaseModel = require('./BaseModel')

class Tag extends BaseModel {
  static get tableName() {
    return 'tags'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Tag
