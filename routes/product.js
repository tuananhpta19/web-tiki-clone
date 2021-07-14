let router = require('express').Router();
let ProductServices = require("../services/ProductServices")
let {createProductThumnail} = require("../services/Upload/uploadImageThumbnail")
let {checkDir, checkFileType} = require("../ultis/uploadFile/checkDir")
router.post("/", async function(req, res, next){
    console.log(req.body)
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
router.post("/upload-thumbnail", async function(req, res, next){
    checkDir();
    createProductThumnail(req, res)
})
module.exports = router;