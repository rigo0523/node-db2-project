<<<<<<< HEAD
const express = require("express");
const server = express();
const db = require("./db-config");

server.use(express.json());

///GET /cars
server.get("/cars", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json({ data: cars });
  } catch (error) {
    console.log(error, "error");
  }
});

//POST /cars
server.post("/cars", async (req, res) => {
  const newPost = req.body;
  try {
    const cars = await db("cars").insert(newPost, "ids").into("cars");
    res.status(201).json({ new_post: cars });
  } catch (error) {
    console.log(error, "error");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`******Server is running on ${port}*****`);
});

//test
=======
require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`***Listening on port ${port}***`);
});
>>>>>>> ae0ae9e9f60da95fb3c7754c90f7dcbe0b10ac57
