const express = require("express")
const router = express.Router()
const controllerController = require("../controllers/controller.js")

router.get("/index",controllerController.index) // http://localhost:3000/index
router.get("/menu",controllerController.menu) // http://localhost:3000/menu

module.exports = router