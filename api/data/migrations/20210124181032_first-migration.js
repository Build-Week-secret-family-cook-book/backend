exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('recipe', tbl => {
      tbl.increments('recipe_id')
      tbl.string('title').notNullable()
      tbl.string('source').notNullable()
      tbl.string('ingredients').notNullable()
      tbl.string('instructions').notNullable()
      tbl.string('category').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('recipe')
}
