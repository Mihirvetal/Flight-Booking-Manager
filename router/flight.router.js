const {showflights, addFlight,particularFlight,deleteFlight} = require("../controllers/flight.controller");

const Router  = require("express").Router;

const flightRouter  = Router()


flightRouter.get('/flights' , showflights);
flightRouter.post('/flights' , addFlight);
flightRouter.get('/flights/:id' , particularFlight);
flightRouter.delete('/flights/:id' , deleteFlight);



module.exports = flightRouter