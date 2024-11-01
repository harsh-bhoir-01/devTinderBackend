const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://harshbhoir1302:" +
      process.env.REACT_APP_MONGO_KEY +
      "@cluster0.i8vvq.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
