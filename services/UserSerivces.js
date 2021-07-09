let UserModel = require("../models/UserModel")
module.exports.createUser = (data) => {
    return UserModel.create(data);
}
module.exports.getUserByEmail = (email) => {
    return UserModel.findOne({email});
}
