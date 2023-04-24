const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'locations', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('fullName')
    .notNullable()

  table.string('description', 5000)
  table.string('type')
  table.string('image')
  table.string('externalLink')
  table.float('longitude')
  table.float('latitude')
  table.string('shortAddress')
  table.string('longAddress')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('locations')
