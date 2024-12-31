const express = require("express");
const { createServer } = require("node:http");
const app = express();
const passport = require("passport");
const passportSetup = require("./passport");
var cors = require("cors");

// middlewares
const errorMiddleware = require("./middlewares/error");

// utils
const appLogger = require("./utils/logger");

// dependencies
require("dotenv").config();
require("express-async-errors");

// startup
app.use(cors());
require("./startup/routes")(app);
require("./startup/db")();

// global middlewares
app.use(passport.initialize());
app.use(errorMiddleware);

// Create HTTP server
const server = createServer(app);

// Import and configure Socket.IO
require("./startup/sockets")(server);

const PORT = 5001;
server.listen(PORT, () => appLogger.info(`Listening on PORT: ${PORT} !`));
