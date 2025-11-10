const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
  name: String,
  city: String,
  country: String,
  yearCreated: Number,
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;