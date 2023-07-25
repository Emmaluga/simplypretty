const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    message: {
        type: String,
        require: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Contacts", ContactSchema)