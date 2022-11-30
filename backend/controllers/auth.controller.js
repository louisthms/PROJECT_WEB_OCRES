const ContactModel= require('../models/contactmodel');

module.exports.ajout= async(req,res)=> {
    console.log(req.body);
 const {email,nom,prenom, numero}=req.body

 try{
    const contact = await ContactModel.create({email,nom,prenom, numero});
    res.status(201).json({contact: contact._id});
 }
 catch(err){
    res.status(200).send({err})
 }
}