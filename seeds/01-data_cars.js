exports.seed = async function (knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      Vin: 123,
      Make: "Hyundai",
      Model: "Sonata",
      Mileage: 50000,
      Transmission: "Turbo V8",
      Title: "Clean",
    },
  ]);
};

//test
