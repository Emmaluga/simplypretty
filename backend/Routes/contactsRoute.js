const express = require("express")
const contactRoute = express.Router()
const contactContrl = require("../Controllers/contactContrl")


contactRoute.post("/", contactContrl)


module.exports = contactRoute