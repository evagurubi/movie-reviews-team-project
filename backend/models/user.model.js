const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  google_id: String,
  given_name: String,
  email: String,
})

module.exports = mongoose.model("User", userSchema)