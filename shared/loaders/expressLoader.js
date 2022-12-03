/** @format */

const routes = require("../.././routes/routes");

exports.expressLoader = (app) => {
  app.use("/api", routes);
};
