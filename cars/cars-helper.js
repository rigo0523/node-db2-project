const db = require("../database/dbConfig");

module.exports = {
  getCars,
  getById,
  addCar,
  updateCar,
  deleteCar,
};

//GET /api/cars
function getCars() {
  return db("cars").select("*");
}

//GET /api/cars/:id
function getById(id) {
  return db("cars").where({ id }).first();
}

//POST /api/cars
function addCar(changes) {
  return db("cars")
    .insert(changes, "id")
    .then((ids) => {
      console.log("ids in post", ids);
      return db("cars").where({ id: ids }).first();
    });
}

//PUT /api/cars/:id
function updateCar(changes, id) {
  return db("cars")
    .update(changes)
    .where({ id: id })
    .then((ids) => {
      console.log("id in update-->", id);
      return db("cars").where({ id: id }).first();
    });
}

//DELETE /api/cars/:id
function deleteCar(id) {
  return db("cars").where({ id }).del();
}
