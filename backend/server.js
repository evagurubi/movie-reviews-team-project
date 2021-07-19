const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const port = 5000;
//Import routes
const Route = require("./routes/Route");

dotenv.config();

connectDB();

//Middlewares
app.use(express.json());

//Route Middleware
app.use("/api", Route);
app.use(cors());

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});