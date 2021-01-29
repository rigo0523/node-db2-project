exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.integer("VIN", 20).notNull();
    tbl.string("Make", 120).notNull();
    tbl.string("Model", 120).notNull();
    tbl.integer("Mileage", 120).notNull();
    tbl.string("Transmission", 120).notNull();
    tbl.string("Title", 120).notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
