const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const EventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = Event = mongoose.model('event', EventSchema);