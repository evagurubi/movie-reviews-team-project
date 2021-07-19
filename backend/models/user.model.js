const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  google_id: { type: String },
  given_name: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("User", userSchema);
