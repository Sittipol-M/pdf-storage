/** @format */

exports.mongooseLoader = () => {
  const { databaseUrl } = require(".././configs/mongoConfig").mongoConfig;
  const mongoose = require("mongoose");
  mongoose.connect(databaseUrl);
};
