/** @format */

const routes = require("../.././routes/routes");
const bodyParser = require("body-parser");
exports.expressLoader = (app) => {
  // parse application/json
  app.use(bodyParser.json());
  app.use("/v1/api", routes);
};
