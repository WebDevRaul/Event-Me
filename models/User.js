const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

const UserScheema = new Scheema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model('user', UserScheema);