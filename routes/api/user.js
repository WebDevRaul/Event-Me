const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../../config/Keys');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const validateSignIn = require('../../validation/sign_in');
const validateRegister = require('../../validation/register');


// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const { errors, isValid } = validateRegister(req.body);

  if (!isValid) return res.status(400).json(errors);
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
            .then(({ _id }) => {
              const newProfile = new Profile({ user_id: _id });
              newProfile.save()
                .then(profile => {
                  User.findByIdAndUpdate(_id, { $addToSet: { profile: profile._id } }, { upsert: true, new: true } )
                    .then(() => res.json({ success: true }))
                })
            })
            .catch(err => res.status(400).json({ error: 'Ooops'}))
        });
      });
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});

// @route   GET api/user/sign-in
// @desc    SignIn User / Returning JWT Token
// @access  Public
router.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateSignIn(req.body);
  
  if (!isValid) return res.status(400).json(errors);
  errors.email='Invalid E-Mail or Password';
  errors.password='Invalid E-Mail or Password';
  
  User.findOne({ email }).populate('profile').exec((err, user) => {
    if(!user) res.status(400).json({ error: 'Ooops' });
    const { _id, first_name, last_name, email, date, profile } = user;
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(404).json(errors);
        const payload = { user: { _id, first_name, last_name, email, date, profile }, isAuth: true };
        jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
          res.json({ token: 'Bearer ' + token });
        });
      })
      .catch(err => res.status(400).json({ error: 'Ooops' }));
  })
});

module.exports = router;