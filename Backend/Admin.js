
const express = require('express');
const router = express.Router();

const ADMIN_EMAIL = "admin@collegeclub.com";
const ADMIN_PASSWORD = "Admin@123"; 

// Admin Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.session.admin = true;
    res.sendStatus(200);
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => res.sendStatus(200));
});

module.exports = router;
