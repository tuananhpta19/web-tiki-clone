let jwt = require('jsonwebtoken');

let generationToken = (data, privateKey, expiresIn) => {
    return new Promise((resolve, reject) => {
        jwt.sign(data, privateKey, { expiresIn: expiresIn }, function(err, token) {
            console.log(token);
            if(err) return reject(err);
            return resolve(token)
        });
    })
}

let decodeToken = (token, privateKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(data, privateKey,function(err, decoded) {
            if(err) return reject(err);
            return resolve(decoded)
        });
    })
}
module.exports = {
    generationToken,
    decodeToken
}