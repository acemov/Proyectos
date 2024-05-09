const express = require("express")
const path = require("path")
const app = express()
const rutaRuta = require("./routes/ruta.js")

app.use(express.static(path.join(__dirname,"../public")))

app.set('views', path.join(__dirname, 'views')) //para ver las vistas
app.set("view engine", "ejs")

app.use("/restaurante",rutaRuta)

app.listen(3000,()=>{"Servidor abierto"})