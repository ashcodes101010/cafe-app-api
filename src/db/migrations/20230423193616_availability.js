const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'availabilities', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('locationId')
    .references('locations.id')
    .onDelete('CASCADE')

  table.float('openHour')
  table.float('openMin')
  table.float('closeHour')
  table.float('closeMin')
  table.boolean('monday').defaultTo(true)
  table.boolean('tuesday').defaultTo(true)
  table.boolean('wednesday').defaultTo(true)
  table.boolean('thursday').defaultTo(true)
  table.boolean('friday').defaultTo(true)
  table.boolean('saturday').defaultTo(true)
  table.boolean('sunday').defaultTo(true)

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('availabilities')
