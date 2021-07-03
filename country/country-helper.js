const db = require("../database/dbConfig");

module.exports = { getCountry, getByID, postCountry, updateCar };

//GET /api/country
function getCountry() {
  return db("country").select("*");
}

//GET /api/country/:id
function getByID(id) {
  return db("country").where("id", id).first();
}

//POST /api/country
function postCountry(changes) {
  return db("country")
    .insert(changes, "id")
    .then((ids) => {
      console.log("ids i postCountry helper----->", ids);
      return db("country").where({ id: ids }).first();
    });
}

//UPDATE /api/country/:id
function updateCar(id, changes) {
  return db("country")
    .update(changes)
    .where({ id: id })
    .then((ids) => {
      return db("country").where({ id }).first();
    });
}
