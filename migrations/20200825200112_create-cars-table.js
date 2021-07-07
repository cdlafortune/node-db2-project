
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', table => {
      table.increments("id"); 
      table.integer("VIN").notNullable();
      table.text('Make', 128).notNullable();
      table.text('Model', 128).notNullable();
      table.integer("Mileage").notNullable();
      table.text("Transmission", 128);
      table.text("Title", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
