
exports.up = (knex) => {
  return knex.schema.createTable("authors", (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.integer('post_id').references('id').inTable('posts');
  })
};


exports.down = (knex) => {
  return knex.schema.dropTableIfExists('authors')
};
