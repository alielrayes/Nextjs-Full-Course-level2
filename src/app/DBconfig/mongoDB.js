const mongoose = require("mongoose");
 
export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://devali:mE5DYtcLoDTY7l0O@cluster0.zgdd5xv.mongodb.net/?retryWrites=true&w=majority");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("ERROR WITH CONNECTING  MongoDB", error);
  }
};