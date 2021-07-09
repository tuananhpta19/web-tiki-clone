let router = require('express').Router();
let ProductServices = require("../services/ProductServices")
router.post("/", async function(req, res, next){
    await ProductServices.createProduct(req.body)
    return res.status(200).json({
        message: 'Tạo sản phẩm thành công',
    })
})
router.get("/", async function(req, res, next){
    let data = await ProductServices.getAllProduct()
    return res.status(200).json({
        message: 'Tạo sản phẩm thành công',
        data
    })
})
