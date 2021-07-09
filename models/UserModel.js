let mongoose = require("../config/dbConfig")
let UserSchema = mongoose.Schema({
   email: String,
   password: String,
   name: String,
   avatar: {
       type: String,
       default: process.env.NODE_ENV === "production" ? process.env.HOST_DOMAIN+"/images/default-user-icon.jpg" : process.env.HOST_DOMAIN_DEV+"/images/default-user-icon.jpg"
   },
   role: {
       type: String,
       default: 'user'
   }
}, { collection: 'user'});

let UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel