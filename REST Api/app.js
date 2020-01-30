const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const postRoute = require("./routes/posts");

// MIDDLEWARES
app.use(bodyParser.json());
app.use("/posts", postRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

// CREATE SERVER
app.listen(3000);
