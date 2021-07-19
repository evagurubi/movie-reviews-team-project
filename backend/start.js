require("dotenv").config();
const app = require("./server.js");
const mongoose = require("mongoose");

// dotenv to hide data, store them in .env file
const PORT = process.env.PORT || 5000;
const MONGO_LINK = process.env.MONGO_LINK;

// connect to mongoDB with mongoose
mongoose
  .connect(`${MONGO_LINK}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, // recommended in connection
    //useCreateIndex: true, // only in devdelopment
  })
  .catch((err) => {
    console.log("connection error:", err);
  }); // handle initial connection errors

const db = mongoose.connection;

// handle errors after initial connection
db.on("error", (err) => {
  console.log("connection error:", err);
});
db.once("open", () => {
  console.log("db connected!");
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});