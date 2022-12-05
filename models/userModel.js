/** @format */
const User = require("../shared/schemas/mongoSchema/user");

class UserModel {
  constructor() {}
  async createUser(registerData) {
    const user = new User(registerData);
    await user.save();
    return user;
  }
  async getUserByUsername(username) {
    const user = await User.findOne({ username });
    return user;
  }
}

module.exports = UserModel;
