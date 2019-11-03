const express = require('express');
const router = express.Router();
const passport = require('passport');
const Event = require('../../models/Event');
const validateCreateEvent = require('../../validation/create_event');


// @route   GET api/event/home
// @desc    Fetch events
// @access  Public
router.get('/home', (req, res) => {
  Event.find({}).populate('author', 'first_name').exec((err, events) => res.json(events))
});

// @route   POST api/event/create-event
// @desc    Create event
// @access  Private
router.post('/create-event',passport.authenticate('jwt'), (req, res) => {
  const { title, date, city, location, description, author } = req.body;
  const event = new Event({ title, date, city, location, description, author });
  
  const { errors, isValid } = validateCreateEvent(req.body);
  if (!isValid) return res.status(400).json(errors);

  event.save()
    .then(({ _id }) => {
      Event.findById(_id).populate('author', 'first_name').exec((err, evt) => res.json(evt))
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;