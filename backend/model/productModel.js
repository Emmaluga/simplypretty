const  mongoose  = require("mongoose");

const ProductSchema = new mongoose.Schema({
   
     image: { 

        type: String,
        require: true,

        },

        tittle: {
            type: String,
            require: true,
        },

        price: {
            type: String,
            require: true,
        },

        description: {
            type: String,
            require: true,
        }
})

 module.exports = mongoose.model("Products", ProductSchema)