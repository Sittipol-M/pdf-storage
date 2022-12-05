/** @format */

const userValidateSchema = require("../shared/schemas/joiSchema/user");

const User = require("../shared/schemas/mongoSchema/user");
class UserService {
  constructor() {}
  async register(userData) {
    //validate user
    userValidateSchema.validate(userData);
    //create user mongodb
    const user = new User(userData);
    await user.save();
    return user;
  }
}

module.exports = UserService;
