var authRouter = require("./auth")
var userRouter = require("./users")
var productRouter = require("./product")
/* GET home page. */
function initRouter(app){
  app.use("/api/auth",authRouter)
  app.use("/api/user",userRouter)
  app.use("/api/product",productRouter)
  return app;
}

module.exports = initRouter;
