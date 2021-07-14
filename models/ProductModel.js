let mongoose = require("../config/dbConfig")
let ProductSchema = mongoose.Schema({
   name: String,
   price: Number,
   sell: Number,
   thumnail: Array,
   quantity: Number
}, { collection: 'prouduct'});

let ProductModel = mongoose.model('prouduct', ProductSchema);


module.exports = ProductModel