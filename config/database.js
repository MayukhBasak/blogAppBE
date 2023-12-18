const mongoose = require("mongoose");
require("dotenv").config();
const database = "mongodb+srv://mayukhbasak2003:KJGpEhxOAVq1UUVv@cluster0.dkhksad.mongodb.net/blogDatabase";

const dbConnect = () => {
  mongoose
    .connect(database)
    .then(() => {
      console.log("DB is connected successfully");
    })
    .catch((error) => {
      console.log(error.message);
      console.log(`Faced some issue to connect with the database`);
      process.exit(1);
    });
};

module.exports = dbConnect;
