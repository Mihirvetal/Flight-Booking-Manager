const mongoose  = require('mongoose');
const connectDB = mongoose.connect("mongodb://localhost:27017/flightBooking");


module.exports = connectDB