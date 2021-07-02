exports.up = async function (knex) {
  await knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.integer("Vin").notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage");
    tbl.string("Transmission");
    tbl.string("Title");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};

//test
