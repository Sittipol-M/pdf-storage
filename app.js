/** @format */

const express = require("express");

const startServer = async () => {
  //use dotenv
  require("dotenv").config();

  const app = express();
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer();
