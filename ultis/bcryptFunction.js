let bcrypt = require("bcrypt")
let saltRounds = 10;
let generationHashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) return reject(err);
                return resolve(hash)
            });
        })
    })
}
let comparePassword = (password, hash)=>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, result) {
            // result == false
            if(err) return reject(err);
            return resolve(result)
        });
    })
}
module.exports = {
    comparePassword,
    generationHashPassword
}
