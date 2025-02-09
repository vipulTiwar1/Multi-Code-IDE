const mongoose = require("mongoose");
require('dotenv').config();

const mongoDbUri = process.env.DB_URI;
//This function connects to the MongoDB database using the mongoose library
const connectDB = async () => {
  try {

    //Connect to the MongoDB database using the URI provided
    await mongoose.connect(mongoDbUri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Log a message to the console if the connection is successful
    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB;