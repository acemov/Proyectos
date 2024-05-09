const express = require("express")
const path = require("path")
const app = express()

const vistas = {
    index: (req, res) => {
        res.render("../views/products/index")
    },
    menu: (req, res) => {
        let id = req.params.idProducto
        let plato = [
            {
                nombre: "Carpaccio fresco",
                descripcion: "Entrada Carpaccio de salmón con cítricos ",
                precio: "U$S 65.50",
                img:"Carpaccio-de-salmon.jpg",
                id:0 //para identificar el producto cuando se ingresa el input en el link
            },
            {
                nombre: "Risotto de berenjena",
                descripcion: "Risotto de berenjena y queso de cabra",
                precio: "U$S 47.00",
                img:"Risotto-berenjena-queso-cabra.jpg",
                id:1 //para identificar el producto cuando se ingresa el input en el link
            },
            {
                nombre: "Mousse de arroz",
                descripcion: "Mousse de arroz con leche y aroma de azahar ",
                precio: "U$S 27.50",
                img:"Mousse-de-arroz-con-leche.jpg",
                id:2 //para identificar el producto cuando se ingresa el input en el link
            },
            {
                nombre: "Espárragos blancos",
                descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
                precio: "U$S 37.50",
                img:"esparragos.png",
                id:3 //para identificar el producto cuando se ingresa el input en el link
            }
        ]

        res.render("../views/products/detalleMenu", { "plato": plato, "id":id})
    }
}
module.exports = vistas