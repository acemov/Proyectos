// Express
const express = require("express")
const app = express()
// Path
const path = require("path")
// Incorporando Rutas

vistas = {
    about:(req,res)=>{
        res.render(path.join(__dirname,"../views/about.html"))
    },
    home:(req,res)=>{
        res.render(path.join(__dirname,"../views/home.html"))
    }
}
module.exports = vistas