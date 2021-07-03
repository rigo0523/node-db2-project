const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

//server export
const server = express();

//import routers
const welcomeRouter = require("../welcome/welcome-router");
const carsRouter = require("../cars/cars-router");

//global middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

//server endpoints
server.use("/", welcomeRouter);
server.use("/api/cars", carsRouter);

//global 500 catch
server.use((err, req, res, next) => {
  console.log("500 error---->", err);
  res.status(500).json({ Message: "500 server error", err });
});

module.exports = server;
