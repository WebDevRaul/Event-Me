const express = require('express');
const router = express.Router();
const passport = require('passport');
const Event = require('../../models/Event');


// @route   POST api/event/create-event
// @desc    Create event
// @access  Private
router.post('/create-event',passport.authenticate('jwt'), (req, res) => {
  const { title, date, city, location, description, author } = req.body;
  const event = new Event({ title, date, city, location, description, author });
  event.save()
    .then(({ _id }) => {
      Event.findById(_id).populate('author', 'first_name').exec((err, evt) => res.json(evt))
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;