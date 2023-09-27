const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    birth_location: String,
    date_of_death: Date,
    death_location: String,
    instrument: String
});

module.exports = mongoose.model('Member', membersSchema);
