const { signup, login } = require("../controllers/user.auth");

const Router  = require("express").Router;

const userRouter  = Router()


userRouter.post('/register' , signup)
userRouter.get('/login' , login)



module.exports = userRouter