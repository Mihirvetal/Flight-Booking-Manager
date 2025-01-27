const userModel = require("../model/user.model");

const signup =async  (req, res) => {
  try {
    const body = req.body;
    const newUser = await userModel.insertMany(body);
    res.status(201).send("User Created");
  } catch (error) {
    res.status(500).send("User Not Created");
  }
};
const login =async (req, res) => {
  try {
    const body = req.body;
    const userlogin = await userModel.find(body);
    res.status(201).send("User LoggedIn");
  } catch (error) {
    console.log(error)
    res.status(501).send("Invalid Creadentials");
  }
};

module.exports = { login, signup };
