// Express
const express = require("express")
const path = require("path")
const app = express()

const vistas = {
    about:(req,res)=>{
        res.sendFile(path.join(__dirname,"../views/about.html"))
    },
    home:(req,res)=>{
        res.sendFile(path.join(__dirname,"../views/home.html"))
    }
}
module.exports = vistas