const check = require("dotenv").config()
console.log(check)
const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")
const asyncHandler = require("express-async-handler")



const protectedRoute = asyncHandler ( async (req, res, next)=> {
    
       
      let token;

       if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
             
              try {

           token = req.headers.authorization.split(" ")[1]

           let decoded = jwt.verify(token,process.env.SECRETKEY)

           req.createdUsers = await userModel.findById(decoded.id).select("-password")

                next()
                
              } catch (error) {
               
                 console.log(error)
                 res.status(400)
                 throw new Error("no authorization")
              }
              if(!token){
              res.status(400)
              throw new Error("no token, no authorization")
              }
       }else{
          res.status(401)
          throw new Error("failed completely")
       }


})


module.exports = protectedRoute