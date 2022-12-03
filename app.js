/** @format */

const express = require("express");
const { dotenvLoader } = require("./shared/loaders/dotenvLoader");
const { mongooseLoader } = require("./shared/loaders/mongooseLoader");
const { expressLoader } = require("./shared/loaders/expressLoader");

const startServer = async () => {
  const app = express();

  //loaders
  dotenvLoader();
  mongooseLoader();
  expressLoader(app);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
};

startServer();
