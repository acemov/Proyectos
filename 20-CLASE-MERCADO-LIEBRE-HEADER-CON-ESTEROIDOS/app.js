const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname,"/public"))) //usa la carpeta public

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html")) // creamos la ruta principal
})

app.listen(3000,()=>{ //abre el servidor
    console.log("Server Open");
})