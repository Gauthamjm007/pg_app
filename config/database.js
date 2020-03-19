const mongoose = require("mongoose");

const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/pg")
    .then(() => {
      console.log("connected to the database ........");
    })
    .catch(() => {
      console.log("error connecting to the database");
    });
};

module.exports = setupDB;
