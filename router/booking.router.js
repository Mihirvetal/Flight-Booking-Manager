const { bookFlight } = require("../controllers/booking.controller");



const Router  = require("express").Router;

const bookingRouter  = Router()


bookingRouter.post('/booking' , bookFlight);




module.exports = bookingRouter