const express = require("express");
const router = express.Router();
const { getByID } = require("../middleware/middleware-stacks");

const Cars = require("./cars-helper");

//GET /api/cars
router.get("/", (req, res, next) => {
  Cars.getCars()
    .then((car) => {
      car
        ? res.status(200).json(car)
        : res.status(404).json({ message: "no cars found" });
    })
    .catch((err) => next(err));
});

//GET /api/cars/:id
router.get("/:id", getByID(), (req, res, next) => {
  res.status(200).json(req.car);
});

//POST /api/cars
router.post("/", (req, res, next) => {
  const changes = req.body;

  Cars.addCar(changes)
    .then((car) => {
      car
        ? res.status(201).json(car)
        : res.status(404).json({ message: `can't post car, check properties` });
    })
    .catch((err) => next(err));
});

//UPDATE /api/cars/:d
router.put("/:id", getByID(), (req, res, next) => {
  const changes = req.body;
  const { id } = req.params;

  Cars.updateCar(changes, id)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => next(err));
});

//DELETE /api/cars/:id
router.delete("/:id", getByID(), (req, res, next) => {
  const { id } = req.params;
  const carDeleted = req.body;
  console.log("Deleted ---->", carDeleted);
  Cars.deleteCar(id)
    .then((car) => {
      res.status(200).json({ deleted_car_id: id, carDeleted });
    })
    .catch((err) => next(err));
});

module.exports = router;
