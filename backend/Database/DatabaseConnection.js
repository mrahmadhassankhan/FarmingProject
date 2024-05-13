const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connected`);
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = db;
