const express = require("express");
const router = express.Router();
const Country = require("./country-helper");

//GET /api/country
router.get("/", (req, res, next) => {
  Country.getCountry()
    .then((car) => {
      car
        ? res.status(200).json(car)
        : res.status(404).json({ message: "error cant get cars" });
    })
    .catch((err) => next(err));
});

//GET /api/country/:id
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Country.getByID(id)
    .then((car) => {
      car
        ? res.status(200).json(car)
        : res.status(404).json({ message: `can't find car by id of ${id}` });
    })
    .catch((err) => next(err));
});

//POST /api/country
router.post("/", (req, res, next) => {
  const changes = req.body;
  console.log("changes body----->", changes);
  Country.postCountry(changes)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => next(err));
});

//UPDATE /api/country/:id
router.put("/:id", (req, res, next) => {
  const body = req.body;
  const { id } = req.params;
  Country.updateCar(id, body)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => next(err));
});

//DELETE /api/country/:id ---> need to use getBY ID middle ware for all endpoints on this router

module.exports = router;
