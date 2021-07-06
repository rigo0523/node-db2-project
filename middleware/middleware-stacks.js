const Cars = require("../cars/cars-helper");
const Country = require("../country/country-helper");

module.exports = { getByID, getCountryByID, validateCountry, validateCars };

//GET /api/cars/:id
function getByID() {
  return (req, res, next) => {
    const { id } = req.params;
    Cars.getById(id)
      .then((car) => {
        car
          ? ((req.car = car), next())
          : res.status(404).json({ message: `no car by ID#${id} found` });
      })
      .catch((err) => next(err));
  };
}

//GET /api/country/:id --> middleware to implement to
function getCountryByID() {
  return (req, res, next) => {
    const { id } = req.params;
    Country.getByID(id)
      .then((car) => {
        car
          ? ((req.car = car), next())
          : res.status(404).json({ message: `no country by ID#${id} found` });
      })
      .catch((err) => next(err));
  };
}

//POST & PUT /api/country/:id --> middleware to validate properties
function validateCountry() {
  return (req, res, next) => {
    const { country, car_id } = req.body;
    if (!country || !car_id) {
      return res.status(404).json({ message: `please check your properties` });
    }
    next();
  };
}

//POST & PUT /api/country/:id --> middleware to validate properties
function validateCars() {
  return (req, res, next) => {
    const { VIN, Make, Model, Mileage, Transmission, Title } = req.body;
    if (!VIN || !Make || !Model || !Mileage || !Transmission || !Title) {
      return res.status(404).json({ message: `please check your properties` });
    }
    next();
  };
}
