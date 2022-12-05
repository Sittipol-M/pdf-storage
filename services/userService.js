/** @format */
const UserModel = require("../models/UserModel");
const { registerValidateSchema, loginValidationSchema } = require("../shared/schemas/joiSchema/user");
const { hashPassword, comparePassword } = require("../shared/utils/password");
class UserService {
  constructor() {}
  async register(registerData) {
    const { username, password, passwordConfirmation } = registerData;
    const userModel = new UserModel();

    //check if user is already registered, validate, hashPassword
    const [user, joiValidation, hashedPassword] = await Promise.all([
      userModel.getUserByUsername(username),
      registerValidateSchema.validateAsync(registerData),
      hashPassword(password),
    ]);

    //check if the user is already registered
    if (user) throw new Error("user is already registered");

    //create user mongodb
    const newUser = await userModel.createUser({ username: username, password: hashedPassword });
    return newUser;
  }
  async login(loginData) {
    const { username, password } = loginData;
    const userModel = new UserModel(loginData);
    //validate
    await loginValidationSchema.validateAsync(loginData);

    //check if user is registered
    const user = await userModel.getUserByUsername(username);
    if (!user) throw new Error("user is not registered");

    //check if the password is correct
    const userHashedPassword = user.password;
    const isSamePassword = await comparePassword(userHashedPassword, password);
    if (!isSamePassword) throw new Error("password is not correct");
  }
}

module.exports = UserService;
