const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const User = require('./models/User');
require('dotenv').config();
const { MONGO_DB } = require('./config/Keys');
const user = require('./routes/api/user');

const app = express();


// Connect to DB
// DeprecationWarning useUnifiedTopology: true 
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware & Config
app.use(passport.initialize());
require('./config/Passport')(passport);
passport.serializeUser((user, done) => {done(null, user._id)});
passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));

app.use('/api/user', user);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));