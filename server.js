const express = require('express');
const connectDB = require('./DB/connectDB');
const userRouter = require('./router/user.router');
const flightRouter = require('./router/flight.router');
const bookingRouter = require('./router/booking.router');

const app = express()
app.use(express.json())
app.use('/api', userRouter);
app.use("/api",flightRouter);
app.use('/api' , bookingRouter)



app.listen(5000,async(req,res)=>{
    await connectDB
    console.log("db is connected on 5000");
})