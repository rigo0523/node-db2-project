const faker = require("faker");
exports.seed = function (knex) {
  //knex cleaner handles truncates
  // Inserts seed entries
  return knex("country").insert([
    {
      country: faker.address.country(),
      car_id: 1,
    },
    {
      country: faker.address.country(),
      car_id: 2,
    },
    {
      country: faker.address.country(),
      car_id: 3,
    },
    {
      country: faker.address.country(),
      car_id: 4,
    },
    {
      country: faker.address.country(),
      car_id: 5,
    },
  ]);
};
