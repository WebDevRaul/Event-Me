const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../../config/Keys');
const User = require('../../models/User');


// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      errors.email = 'This E-Mail is already taken';
      if(user) return res.status(409).json(errors);
      const newUser = new User({ first_name, last_name, email, password });

      bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        });
      });
    })
    .catch(err => console.log(err));
});

// @route   GET api/user/sign-in
// @desc    SignIn User / Returning JWT Token
// @access  Public
router.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  errors.emailOrPassword='Invalid E-Mail or Password';

  User.findOne({ email })
    .then(user => {
      if(!user) res.status(404).json(errors);
      const { id, first_name, last_name, email } = user;
      
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(404).json(errors);
          const payload = { user_id: id, first_name, last_name, email };
          jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
            res.json({ success: true, token: 'Bearer ' + token });
          });
        })
    })
    .catch(err => console.log(err));
});