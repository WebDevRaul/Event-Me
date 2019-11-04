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
      Event.findById(_id).populate('author', 'first_name').exec((err, evt) => console.log(evt))
    })
    .catch(err => res.status(400).json(err));
});

// @route   POST api/event/join-event
// @desc    Join Event
// @access  Private
router.post('/join-event', passport.authenticate('jwt'), (req, res) => {
  const { evt_id, user } = req.body;
  Event.findByIdAndUpdate(evt_id, 
    { $addToSet: { members: user } }, 
    { upsert: true, new: true })
    .populate('author', 'first_name').exec((err, evt) => {
      if(err) return res.status(400).json({ noEvt: 'Event not found!' });
      res.json(evt)
    })
});

// @route   POST api/event/leave-event
// @desc    Leave Event
// @access  Private
router.post('/leave-event', passport.authenticate('jwt'), (req, res) => {
  const { evt_id, user: { user_id } } = req.body;
  Event.findByIdAndUpdate(evt_id, 
    { $pull: { members: { user_id } } }, 
    { upsert: true, new: true })
    .populate('author', 'first_name').exec((err, evt) => {
      if(err) return res.status(400).json({ noEvt: 'Event not found!' });
      res.json(evt)
    })
});

module.exports = router;