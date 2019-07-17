
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.text('name', 128).notNullable().unique()
      tbl.text('description', 128).notNullable().unique()
      tbl.boolean('completed').notNullable()
    })

    .createTable('actions', tbl => {
      tbl.increments()
      tbl.text('action_description', 128).notNullable()
      tbl.text('action_notes', 128)
      tbl.boolean('completed').notNullable()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects');
};
