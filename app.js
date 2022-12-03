/** @format */

const express = require("express");
const { dotenvLoader } = require("./shared/loaders/dotenvLoader");

const startServer = async () => {
  const app = express();

  dotenvLoader();

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
};

startServer();
