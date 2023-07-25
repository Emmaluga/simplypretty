require("dotenv").config()
const express = require("express")
const app = express()


const connectDB = require("./config/connect")
const errRoute = require("./middleware/notfoundMiddleware")
const errHandler = require("./middleware/errMiddleware")
const userRoute = require("./Routes/userRoute")
const productRoute = require("./Routes/productRoute")
const contactRoute = require("./Routes/contactsRoute")
const cors = require("cors")



//middleware
app.use(cors({origin:true, credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes


app.use("/", userRoute)
app.use("/products", productRoute)
app.use("/contact", contactRoute)




//middleware
app.use( errRoute)
app.use(errHandler)

 



PORT = process.env.PORT || 5000

const start = ()=> {
    
     try {
     connectDB(process.env.MONGOURL) 
    console.log("connected to Db")
 app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
     } catch (error) {
        console.log(" failed to connect Db") 
     }
}

 start()


