const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    },
},
{
 timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)