/** @format */

const routes = require("../.././routes/routes");

exports.expressLoader = (app) => {
  app.use("/v1/api", routes);
};
