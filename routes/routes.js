/** @format */

const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/userController");

//users
router.post("/users/register", userRegister);
router.post("/users/login", userLogin);

module.exports = router;
