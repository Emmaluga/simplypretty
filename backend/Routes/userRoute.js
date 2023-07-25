const express = require('express')
const  userRoute  = express.Router()
const {  registerContrl, loginContrl, getMeContrl } = require("../Controllers/userContrl")
const protectedRoute = require('../middleware/authMiddleware')
const {body, validationResult} = require("express-validator")


userRoute.post("/register",
[
body("fullname").isLength({min:3})
.withMessage("complete fullname fields")
.trim(),
body("email").normalizeEmail().isEmail()
.withMessage("complete email fields")
.trim(),
body("password").isStrongPassword({
    minLength: 1,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols:1,

})
.withMessage("complete email fields")
.withMessage("password must have a max length of 30 ")
.withMessage("password must have a min numbers of 1 ")
.withMessage("password must have a min lowercase of 1 ")
.withMessage("password must have a min uppercase of 1 ")
.withMessage("password must have a min symbols of 1 ")
.trim()
    
],



(req,res,next)=> {
    
const error = validationResult(req)

  if(!error.isEmpty() ){
    res.json({
        success: false,
        Message: error.array()
    })

  }
    next()
  },

 registerContrl)
userRoute.post("/login",
[
 body("email").isEmail().normalizeEmail()
 .trim()
 .withMessage("complete email field"),

 body("fullname").isLength({min:3})
 .trim()
 .withMessage("complete fullname fields")


],

(req,res,next)=> {
    const error = validationResult(req)
    if(!error.isEmpty()){
       res.json({
         success: false,
         Message: error.array()
       })
    }

    next()
 },

loginContrl)

userRoute.get("/me", protectedRoute, getMeContrl)

    
module.exports = userRoute
