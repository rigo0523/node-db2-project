exports.up = function (knex) {
  return knex.schema.createTable("country", (tbl) => {
    // will have foreign key ON KNEXFILE.JS
    tbl.increments();
    tbl.string("country", 120).notNull();
    tbl
      .integer("car_id")
      .unsigned()
      .notNull()
      .references("cars.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("country");
};

//will reference cars
