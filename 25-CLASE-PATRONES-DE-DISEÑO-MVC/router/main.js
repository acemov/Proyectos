const express = require("express")
const app = express()
const router = express.Router()
const mainController = require("../controllers/mainController.js")


router.get("/about",mainController.about)
router.get("/home",mainController.home)


module.exports = router
