const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  movie_id: { type: String },
  reviewer: { type: String },
});

module.exports = mongoose.model("Review", reviewSchema);
