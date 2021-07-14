var express = require('express');
var router = express.Router();
let userServices = require("../services/UserSerivces")
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    let listUsers = await userServices.getAllUser();
    return res.status(200).json({
      message: "hiển thị người dùng thành công",
      data: listUsers
    })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
});
router.put('/status/:id', async function (req, res, next) {
  try {
    await userServices.updateStatusUser(req.params.id, req.body.status);
    return res.status(200).json({
      message: "Cập nhật trạng thái người dùng thành công",
    })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
});

module.exports = router;
