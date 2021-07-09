let mongoose = require("../config/dbConfig")
let OrderSchema = mongoose.Schema({
    idUser: {
        type: String,
        ref: 'users'
    },
    product: [{
        idProduct: String,
        nameProduct: String,
        quantity: Number
    }],
    code: String,
    totalPrice: Number,
    status: {
        type: String,
        default: "wait"
    },
    createdAt: Number,
    updatedAt: Number

}, { collection: 'order' });

let OrderModel = mongoose.model('order', OrderSchema);


module.exports = OrderModel