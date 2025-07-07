
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  collegeId: String,
  mobile: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Message stored successfully' });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: 'Failed to store message' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
