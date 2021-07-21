let router = require('express').Router();
let UserServices = require("../services/UserSerivces")
let { generationHashPassword, comparePassword } = require("../ultis/bcryptFunction")
let { generationToken } = require("../ultis/jwtFunction")
router.post("/login", async function(req, res, next){
    let {email, password} = req.body;
    let infoUser = await UserServices.getUserByEmail(email);
    let checkPassword = await comparePassword(password, infoUser.password);
    if(checkPassword){
        let token = await generationToken({_id: infoUser._id}, "test", "30d")
        delete infoUser.password
        return res.status(200).json({
            message: 'Đăng nhập thành công',
            data:{
                infoUser,
                token
            }
        })
    }else{
        return res.status(403).json({
            message: 'Đăng nhập không thành công'
        })
    }
})

router.post("/sign-up", async function(req, res, next){
    let {password} = req.body;
    let hashPassword = await generationHashPassword(password)
    req.body.password = hashPassword
    await UserServices.createUser(req.body)
    return res.status(200).json({
        message: 'Đăng kys thành công',
    })
})

module.exports = router;