const asyncHandler = require("express-async-handler")
const contactModel = require("../model/contactModel")


const contactContrl = asyncHandler ( async (req,res)=> {

    const {fullname, email, message } = req.body
      const getContact = await contactModel.create({
       
         fullname: fullname,
         email: email,
         message: message
      })

      res.json(getContact)
})

module.exports = contactContrl