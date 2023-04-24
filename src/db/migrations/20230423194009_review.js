const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'reviews', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('locationId')
    .references('locations.id')
    .onDelete('CASCADE')

  table
    .uuid('userId')
    .references('users.id')
    .onDelete('CASCADE')

  table.string('review', 1000)
  table.float('rating')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('reviews')
