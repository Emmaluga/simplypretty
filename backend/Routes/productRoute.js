
const express = require("express");
const productRoute = express.Router()
const {productcontrl, productIDcontrl }= require("../Controllers/productRoute")

productRoute.get("/", productcontrl)
productRoute.get("/:id", productIDcontrl)

module.exports = productRoute