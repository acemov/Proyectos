const express = require ("express")
const app = express()
const path = require("path")
const mainRouter = require ("./router/main.js")


app.listen(3000,()=>{"Servidor Abierto"})
app.use(express.static(path.join(__dirname,"/public")))

app.use("/views",mainRouter)