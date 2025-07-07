
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema
const registrationSchema = new mongoose.Schema({
  name: String,
  collegeId: String,
  email: String,
  phone: String,
  event: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);

// POST - Save registration
router.post('/', async (req, res) => {
  try {
    const reg = new Registration(req.body);
    await reg.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// GET - Fetch all registrations
router.get('/', async (req, res) => {
  try {
    const data = await Registration.find().sort({ date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching registrations' });
  }
});

module.exports = router;
