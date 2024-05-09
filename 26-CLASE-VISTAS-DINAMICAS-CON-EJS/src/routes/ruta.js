const express = require("express")
const router = express.Router()
const controllerController = require("../controllers/controller.js")

router.get("/products",controllerController.products) // http://localhost:3000/products

module.exports = router