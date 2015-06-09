exports.up = function (knex) {
  return knex.schema
    .createTable('comics', function (t) {
      t.increments('id');
      t.text('name').notNullable().unique();
    })
    .createTable('jokes', function (t) {
      t.increments('id');
      t.integer('comic_id').notNullable().references('id').inTable('comics');
      t.text('content').notNullable();
    })
}; 


exports.down = function (knex) {
  return knex.schema
    .dropTable('comics')
    .dropTable('jokes');
};
