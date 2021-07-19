require("dotenv").config();
const app = require("./server.js");
const connectDB = require("./config/db");

// // dotenv to hide data, store them in .env file
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});