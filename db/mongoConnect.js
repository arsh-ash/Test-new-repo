const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  const conn = await mongoose.connect("mongodb://prod:prod@52.54.230.192:27017/production?directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    

  });
  console.log("mongodb Connected")
};

module.exports = connectDB;
