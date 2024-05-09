const express = require("express")
const path = require("path")
const app = express()
const rutaRuta = require("./routes/ruta.js")

app.use(express.static(path.join(__dirname,"../public")))
app.set("view engine", "ejs")

app.use("/",rutaRuta)

app.listen(3000,()=>{"Servidor abierto"})