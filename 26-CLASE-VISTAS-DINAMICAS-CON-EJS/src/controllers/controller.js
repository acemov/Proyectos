const express = require("express")
const path = require("path")
const app = express()

const vistas = {
    products: (req,res)=>{
        res.sendFile(path.join(__dirname,"../views/products/index.html"))
    }
}
module.exports = vistas