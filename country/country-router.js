const express = require("express");
const router = express.Router();
const Country = require("./country-helper");

//global middleware
const {
  getCountryByID,
  validateCountry,
} = require("../middleware/middleware-stacks");

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
router.get("/:id", getCountryByID(), (req, res, next) => {
  res.status(200).json(req.car);
});

//POST /api/country
router.post("/", validateCountry(), (req, res, next) => {
  const changes = req.body;
  console.log("changes body----->", changes);
  Country.postCountry(changes)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => next(err));
});

//UPDATE /api/country/:id
router.put("/:id", getCountryByID(), validateCountry(), (req, res, next) => {
  const body = req.body;
  const { id } = req.params;
  Country.updateCountry(id, body)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => next(err));
});

//DELETE /api/country/:id ---> need to use getBY ID middle ware for all endpoints on this router
router.delete("/:id", getCountryByID(), (req, res, next) => {
  const { id } = req.params;
  const { country } = req.body;

  Country.deleteCountry(id)
    .then((car) => {
      res.status(202).json({ deleted: { id, country } });
    })
    .catch((err) => next(err));
});

module.exports = router;
