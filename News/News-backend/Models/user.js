const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: { type: String, required: true, min: 5, max: 255 },
  LastName: { type: String, required: true, min: 5, max: 255 },
  Email: { type: String, required: true, max: 255, min: 5 },
  Password: { type: String, required: true, max: 1024, min: 6 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
