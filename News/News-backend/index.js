const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoute = require("./Routes/auth");
const bookRoute = require("./Routes/book");

app.use("/api/user", authRoute);
app.use("/api/book", bookRoute);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(3000, () => {
  console.log("Running on port 3000...");
});
