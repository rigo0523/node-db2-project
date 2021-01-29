const faker = require("faker");
exports.seed = function (knex) {
  //knex cleaner handles truncates
  // Inserts seed entries
  return knex("cars").insert([
    {
      id: 1,
      VIN: faker.vehicle.vin(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Mileage: faker.random.number(),
      Transmission: faker.random.word(),
      Title: faker.name.title(),
    },
    {
      id: 2,
      VIN: faker.vehicle.vin(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Mileage: faker.random.number(),
      Transmission: faker.random.word(),
      Title: faker.name.title(),
    },
    {
      id: 3,
      VIN: faker.vehicle.vin(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Mileage: faker.random.number(),
      Transmission: faker.random.word(),
      Title: faker.name.title(),
    },
    {
      id: 4,
      VIN: faker.vehicle.vin(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Mileage: faker.random.number(),
      Transmission: faker.random.word(),
      Title: faker.name.title(),
    },
    {
      id: 5,
      VIN: faker.vehicle.vin(),
      Make: faker.vehicle.manufacturer(),
      Model: faker.vehicle.model(),
      Mileage: faker.random.number(),
      Transmission: faker.random.word(),
      Title: faker.name.title(),
    },
  ]);
};
