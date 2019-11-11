const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  members: { type: Array, default: [] }
});

module.exports = Event = mongoose.model('event', EventSchema);