const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { SECRET_OR_KEY } = require('../../config/Keys');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const validateBasic = require('../../validation/basic');
const validateAbout = require('../../validation/about');


// @route   POST /api/profile/basic
// @desc    Update User Basic Info
// @access  Private
router.post('/basic', passport.authenticate('jwt'), (req, res) => {
  const { last_name, first_name, gender, birthday, town } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateBasic(req.body);
  if (!isValid) return res.status(400).json(errors);

  const user = User.findByIdAndUpdate(_id, { first_name, last_name }, { new: true });
  const profile = Profile.findOneAndUpdate({user_id: _id}, { gender, birthday, town }, { new: true });

  Promise.all([user, profile])
    .then(() => 
      User.findById(_id, 'first_name last_name email date')
      .populate('profile').exec((err, user) => {
        if(err) return res.status(400).json({ error: 'Ooops'});
        // Create a new Token
        const payload = { user, isAuth: true };
          jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
            res.json({ token: 'Bearer ' + token, user });
          });
      }))
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});

// @route   POST /api/profile/about
// @desc    Update User About Info
// @access  Private
router.post('/about', passport.authenticate('jwt'), (req, res) => {
  const { status, bio, select, ocupation, country } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateAbout(req.body);
  if (!isValid) return res.status(400).json(errors);

  Profile.findOneAndUpdate({user_id: _id}, { status, bio, hobbies: select, ocupation, country }, { new: true })
    .then(() => {
      User.findById(_id, 'first_name last_name email date')
        .populate('profile').exec((err, user) => {
          if(err) return res.status(400).json({ error: 'Ooops'});
          // Create a new Token
          const payload = { user, isAuth: true };
          jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
            res.json({ token: 'Bearer ' + token, user });
          });
        })
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}))
});

// @route   POST /api/profile/photo
// @desc    Upload photo
// @access  Private
router.post('/photo', passport.authenticate('jwt'), upload.single('file'), (req, res) => {
  console.log(req.file);
  const { path } = req.file;
  // Validation here
  cloudinary.uploader.upload(path, (res) => {
    console.log(res)
  }, {
    public_id: `${Date.now()}`,
    resource_type: 'auto'
  })

});

module.exports = router;