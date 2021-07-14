let UserModel = require("../models/UserModel")
module.exports.createUser = (data) => {
    return UserModel.create(data);
}
module.exports.getUserByEmail = (email) => {
    return UserModel.findOne({email});
}
module.exports.getAllUser = (user) => {
    return UserModel.find({}, {password: 0});
}
module.exports.updateStatusUser = (id, status) => {
    return UserModel.updateOne({_id: id}, {status})
}