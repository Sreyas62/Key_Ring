const express = require('express');
const router = express.Router();
const { 
    getContact, 
    createContact,
    getContactById,
    updateContact,
} = require('../controllers/contactController');

router.route('/').get(getContact).post(createContact);
router.route("/:id").get(getContactById).put(updateContact);


module.exports = router;