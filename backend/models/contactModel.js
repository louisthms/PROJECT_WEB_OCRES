const mongoose = require('mongoose');
//const {isEmail} = require('validator');

const contactSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
           // validate: [isEmail],
        },
        nom:{
            type: String,
            required: true,
        },
        prenom:{
            type: String,
            required: true,
        },
        numero:{
            type: Number,
            required: true,
        },
        

    }
)

const ContactModel = mongoose.model('contact', contactSchema);
module.exports = ContactModel;