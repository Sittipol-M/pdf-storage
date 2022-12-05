/** @format */

const UserService = require("../services/userService");

exports.userRegister = async (req, res) => {
  try {
    const registerData = req.body;
    const userServiceInstance = new UserService();
    const user = await userServiceInstance.register(registerData);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.userLogin = async (req, res) => {
  try {
    c
  } catch (error) {
    res.send(400).send({ error: error.message });
  }
};
