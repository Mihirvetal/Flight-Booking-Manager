const flightModel = require("../model/flight.model")


const showflights = async (req,res)=>{
    const flights =await flightModel.find()
    console.log(flights);
    res.send("all flights")
}

const addFlight =async (req,res)=>{
    const flight = req.body;
    const flightAdd = await flightModel.insertMany(flight)
    console.log(flightAdd);
    // console.log(flight);
    res.send("add flight")
}

const particularFlight =async (req,res)=>{
    const data  = req.params.id 
    const flight = await flightModel.findOne({_id: data})
    if(flight ===null){
        res.send("There is No Flight Available")
    }
    console.log(flight);
    res.send("This is the Available Flight")
}

const deleteFlight =async  (req,res)=>{
    const data = req.params.id;
    const deleteflight =await flightModel.deleteOne({_id:data})
    if(deleteFlight.deleteCount ===0){
        res.send("Invalid Flight ID")
    }
    res.send("Flight delete successfull")
}

module.exports = {showflights,addFlight,particularFlight,deleteFlight}