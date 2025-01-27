

const bookingModel = require('../model/booking.model')

const bookFlight = (req,res)=>{
    const data = req.body ;
    const booking  = bookingModel.insertOne(data)
    res.send("Flight Booked")
}

module.exports = {bookFlight}