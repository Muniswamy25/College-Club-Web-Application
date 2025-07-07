
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema
const joinClubSchema = new mongoose.Schema({
  name: String,
  collegeId: String,
  email: String,
  clubName: String,
  date: { type: Date, default: Date.now }
});

const JoinClub = mongoose.model('JoinClub', joinClubSchema);

// POST: Join a club
router.post('/', async (req, res) => {
  try {
    const joinRequest = new JoinClub(req.body);
    await joinRequest.save();
    res.status(200).json({ message: 'Join request submitted successfully' });
  } catch (error) {
    console.error("Error joining club:", error);
    res.status(500).json({ message: 'Failed to join club' });
  }
});

router.get('/', async (req, res) => {
  try {
    const joins = await JoinClub.find().sort({ date: -1 });
    res.json(joins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
