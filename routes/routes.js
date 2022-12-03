/** @format */

const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/user");

//users
router.get("/users/register", userRegister);

module.exports = router;
