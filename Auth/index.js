const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

const app = express();
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/posts");

dotenv.config();
app.use(express.json());
// app.use(bodyParser.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(3000, () => console.log("Running on port 3000..."));
