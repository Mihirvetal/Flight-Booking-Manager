const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {type:String,unique:true},
    password: String
  }
  )

const userModel  = model("user",userSchema);

module.exports = userModel;