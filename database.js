const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log(`Successfully connected to database`);
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

connect();
module.exports = { connect };
