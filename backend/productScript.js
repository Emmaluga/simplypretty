require("dotenv").config()
const productData = require("./data/productData")
const productModel = require("./model/productModel")
const connectDB = require('./config/connect')
connectDB(process.env.MONGOURL)

const products =  async ()=> {

        try {
          await productModel.deleteMany()
          await productModel.insertMany(productData) 
          console.log("products inserted") 
          process.exit()
        } catch (error) {
            console.log("products insertion fail.") 
            process.exit(1)
           
        }
}

products()