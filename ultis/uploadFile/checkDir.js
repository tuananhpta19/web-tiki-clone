const fs=require("fs");
const path=require("path");

const dir={
    urlImage:"public/uploads",
}
const checkDir=()=>{
    const dirImage=path.join(__dirname,`../../${dir.urlImage}`)
    if (!fs.existsSync(dirImage)) {
        fs.mkdirSync(dirImage,{ recursive: true });
      }
    return;
};

const checkFileType=(file, cb) =>{
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
      return cb(null, true);
  } else {
      cb('Error: Image Only!')
  }
}


module.exports= {
  checkDir,
  checkFileType
};