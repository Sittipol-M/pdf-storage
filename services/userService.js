/** @format */
const UserModel = require("../models/UserModel");
const { registerValidateSchema, loginValidationSchema } = require("../shared/schemas/joiSchema/user");
class UserService {
  constructor() {}
  async register(registerData) {
    //validate register
    await registerValidateSchema.validateAsync(registerData);
    //create user mongodb
    const userModel = new UserModel();
    //check password confirmation
    const newUser = await userModel.createUser(registerData);
    return newUser;
  }
  async login(loginData) {
    //validate login
    loginValidationSchema.validate(loginData);
    //get user data
    const userModel = new UserModel(loginData);
    const { username, password } = loginData;
    const user = await userModel.getUserByUsername(username);
  }
}

module.exports = UserService;
