const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user' },
  birthday : { type: Date, default: undefined },
  town: { type: String, default: undefined }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);