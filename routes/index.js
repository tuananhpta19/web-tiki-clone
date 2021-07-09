var express = require('express');
var router = express.Router();
var authRouter = require("./auth")
/* GET home page. */
function initRouter(app){
  app.use("/api/auth",authRouter)
  return app;
}

module.exports = initRouter;
