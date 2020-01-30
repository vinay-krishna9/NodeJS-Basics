const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  BookName: { type: String, required: true, min: 5, max: 255 },
  Date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", bookSchema);
