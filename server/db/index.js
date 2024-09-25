const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://arjunawesome12002:hello123@cluster0.g8g0bz4.mongodb.net/CheckReturns?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.error("Something happened to mongodb ", err);
  });
