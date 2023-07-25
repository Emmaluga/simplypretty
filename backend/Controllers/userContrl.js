require("dotenv").config()
const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")




const registerContrl = asyncHandler ( async (req,res)=> {
      const {fullname, email, password, } = req.body
      const userExist = await userModel.findOne({email})
         if(userExist){
           res.status(500)
           throw new Error("user already exist")
         }

           const saltrounds = 10
           const salt = await bcrypt.genSalt(saltrounds)
           const hashpassword = await bcrypt.hash(password, salt)

         const newUser = await userModel.create({
              fullname,
              email,
              password: hashpassword,
             
         })

           if(newUser){

           res.json({

             _id: newUser.id,
             fullname:  newUser.fullname,
            email: newUser.email,
            token: generatetoken(newUser._id)

           })

           }else{
             res.status(500)
             throw new Error("invalid user data")
           }

       


       
})

const loginContrl = asyncHandler ( async (req,res)=> {
    const {email, password} = req.body
    const checkmail = await userModel.findOne({email})
        
       if(checkmail &&  await bcrypt.compare(password, checkmail.password)){
          res.json({
            _id: checkmail.id,
            fullname: checkmail.fullname,
             email: checkmail.email,
             token: generatetoken(checkmail._id)
             
          })  
       }else{
          res.status(500)
          throw new Error("password does not match.")
       }
       
      
})

const getMeContrl = asyncHandler ( async (req,res)=> {
      
  const {_id, email, fullname} = await userModel.findById(req.createdUsers.id)

              res.json({
                id: _id,
                fullname,
                email

              })
    
})

const generatetoken =  (id)=> {
   return jwt.sign({id}, process.env.SECRETKEY, {expiresIn: "30days"})
}

 



module.exports =  {

     registerContrl,
     loginContrl,
     getMeContrl,

}
