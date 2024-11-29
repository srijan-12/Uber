const mongoose = require("mongoose");
const connectToDB = async() =>{
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connected to database")
}
module.exports = connectToDB;