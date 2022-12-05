/** @format */

const UserService = require("../services/userService");

exports.userRegister = async (req, res) => {
  try {
    const userRegisterData = req.body;
    const userServiceInstance = new UserService();
    const user = await userServiceInstance.register(userRegisterData);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
