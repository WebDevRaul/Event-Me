const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user' },
  gender: { type: String },
  birthday : { type: Date },
  town: { type: String },
  status: { type: String },
  bio: { type: Array, default: [] },
  hobbies: { type: Array, default: [] },
  ocupation: { type: String },
  country: { type: String },
  image: { type: Object, default: {} },
}, { timestamps: true });

module.exports = Profile = mongoose.model('profile', ProfileSchema);