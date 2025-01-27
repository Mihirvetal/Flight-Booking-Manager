const flightModel = require("../model/flight.model")


const showflights = async (req,res)=>{
    const flights =await flightModel.find()
    console.log(flights);
    res.send("all flights")
}

const addFlight =async (req,res)=>{
    const flight = req.body;
    const flightAdd = await flightModel.insertMany([flight])
    console.log(flightAdd);
    res.send("add flight")
}

const particularFlight =async (req,res)=>{
    const data  = req.params.id 
    const flight = await flightModel.findOne({_id: data})
    console.log(flight);
    res.send("this is the unique Flight")
}

const deleteFlight = (req,res)=>{
    const data = req.params.id;
    const deleteflight = flightModel.deleteOne({_id:data})
    
    res.send("Flight delete successfull")
}

module.exports = {showflights,addFlight,particularFlight,deleteFlight}