const Cars = require("../cars/cars-helper");

module.exports = { getByID };

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
