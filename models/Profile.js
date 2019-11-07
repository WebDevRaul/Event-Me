const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user' },
  gender: { type: String },
  birthday : { type: Date },
  town: { type: String }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);