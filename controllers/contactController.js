const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc Get all contacts
// @route GET /api/v1/contacts
// @access Public

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, msg: 'Show all contacts', data: contacts });
});

// @desc Create a contact
// @route POST /api/v1/contacts
// @access Public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please fill all fields!!');
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json({ success: true, msg: 'Created new contact', data: contact});
});


// @desc Get a contact
// @route GET /api/v1/contacts/:id
// @access Public
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json({ success: true, msg: 'Show contact', data: contact });
});


module.exports = { 
    getContact, 
    createContact,
    getContactById,
};