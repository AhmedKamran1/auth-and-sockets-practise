const express = require("express");
const auth = require("../routes/auth");
const mail = require("../routes/mail");
const message = require("../routes/message");
const room = require("../routes/room");

const routeMiddleware = require("../middlewares/invalid-route");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/auth", auth);
  app.use("/api/mail", mail);
  app.use("/api/message", message);
  app.use("/api/room", room);
  app.use(routeMiddleware);
};
