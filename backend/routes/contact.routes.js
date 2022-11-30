var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth.controller');
const contactController = require('../controllers/contact.controller');
//auth
router.post("/register", authController.ajout);

router.get('/',contactController.getAllContacts);
router.get('/:id',contactController.contactInfo);
router.put("/:id", contactController.updateContact);
router.delete('/:id',contactController.deleteContact);
module.exports = router;