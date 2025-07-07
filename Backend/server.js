
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const eventRoutes = require('./event');
const adminRoutes = require('./Admin')

const contactRoute = require('./contact')
const joinclubRoute = require('./joiningclub')
const registrationRoute = require('./register')

const session = require('express-session');

const app = express();
const PORT = 4000;

// Session middleware
app.use(session({
  secret: 'your_secret_key', // Change this to a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/Admin', adminRoutes);

app.use('/api/contact', contactRoute);
app.use('/joinclub', joinclubRoute);
app.use('/registration', registrationRoute);

app.get('/', (req, res) => {
  res.send('Server is working!');
});


// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/collegeclub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));
