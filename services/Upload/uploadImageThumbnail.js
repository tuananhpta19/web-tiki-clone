const path = require('path')
const fs = require("fs")
const multer = require("multer");
let { checkFileType} = require("../../ultis/uploadFile/checkDir")

const storageModule = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
      cb(null, file.originalname.split(path.extname(file.originalname))[0] + "-" + Date.now() + "" + path.extname(file.originalname))
    }
    })
  
  const uploadImage = multer({
    storage: storageModule,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('image')
  
  
  
  
  const createProductThumnail = async (req, res) => {
    return uploadImage(req, res, async (err) => {
      if (err) return res.status(500).json({
        message: "upload file bị lỗi"
      });
      if (req.file && req.file.length === 0) return res.status(400).json({
        message: "file không được định nghĩa"
      });
      console.log(req.file)
      return res.status(200).json({
        error: false,
        message: "File uploaded!",
        status: "done",
        url: `${process.env.NODE_ENV !== "production"
        ? process.env.HOST_DOMAIN_DEV
        : process.env.HOST_DOMAIN
        }/uploads/${req.file.filename}`,
      });
    })
  }

  module.exports = {
    createProductThumnail
  }
  