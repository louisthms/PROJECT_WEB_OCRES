const ContactModel = require('../models/contactmodel');
const ObjectID = require('mongoose').Types.ObjectId;
const email = require('../models/contactmodel');

module.exports.getAllContacts = async ( req,res) =>{
    const contacts = await ContactModel.find().select();
    res.status(200).json(contacts);
}

module.exports.contactInfo= (req,res) => {
    console.log(req.params);
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown :'+ req.params.id)

    ContactModel.findById(req.params.id, (err,docs)=>{
    if (!err) res.send(docs);
    else console.log('ID unknown'+ err);
})

};

module.exports.updateContact = async(req,res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown'+req.params.id)

    const updateRecord = {
        email: req.body.email,
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero: req.body.numero
    };

    ContactModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new: true},
        (err,docs)=>{
            if(!err) res.send(docs);
            else console.log("Update error:"+ err);
        }
    )
};
 /*module.exports.deleteContact = async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown:"+req.params.id)

    try {
        await ContactModel.remove({ _id: req.params.id}).exec();
        res.status(200).json({message: "success delete"});
    } catch (err) {
        return res.status(500).json({ message:err});
    }    
    } */

    module.exports.deleteContact = async (req, res) => {
        if(!email.isValid(req.params.email))
        return res.status(400).send("unknown email:"+req.params.email)
    
        try {
            await ContactModel.remove({ _id: req.params.id}).exec();
            res.status(200).json({message: "success delete"});
        } catch (err) {
            return res.status(500).json({ message:err});
        }    
        }