const appLogger = require("../utils/logger");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => appLogger.info("Connected to MongoDB"))
    .catch((e) => appLogger.error("Error connecting to MongoDB", e));
};
