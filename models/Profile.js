const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  gender: { type: String },
  birthday : { type: Date },
  town: { type: String },
  status: { type: String },
  bio: { type: String },
  hobbies: { type: Array, default: [] },
  ocupation: { type: String },
  country: { type: String },
  image: { type: Array, default: [{ secure_url: '', public_id: 0 }] },
}, { timestamps: true });

module.exports = Profile = mongoose.model('profile', ProfileSchema);