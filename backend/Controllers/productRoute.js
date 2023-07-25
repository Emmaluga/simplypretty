const asyncHandler = require("express-async-handler")
const productModel = require("../model/productModel")



const productcontrl = asyncHandler ( async (req,res)=> {

   const products = await productModel.find()

    if(!products){
       res.status(500)
       throw new error("products not available")
    }else{
       res.json(products)
    }
 
})

const productIDcontrl = asyncHandler (async (req,res)=> {

const singleProduct = await productModel.findById(req.params.id)

     if(!singleProduct){
        res.status(500)
        throw new error("single product does not exist")
     }else{
        res.json(singleProduct)
     }

       
})

module.exports = {
   productcontrl,
   productIDcontrl
}