let ProductModel = require("../models/ProductModel")
module.exports.createProduct = (data) => {
    return ProductModel.create(data);
}
module.exports.getAllProduct = () => {
    return ProductModel.find();
}

